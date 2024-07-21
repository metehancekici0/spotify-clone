import React, { useEffect, useMemo } from "react";
import { Icon } from "../../Icons";
import { useAudio } from "react-use";
import { secondsToTime } from "../../utils";
import CustomRange from "../CustomRange";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying, setShowDetail } from "../../stores/player";
import CustomTooltip from "../Tooltip";

function Player() {
  const dispatch = useDispatch();
  const { current, showDetail } = useSelector((store) => store.player);

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "volumeMuted";
    if (state.volume > 0 && state.volume < 0.33) return "volumeLow";
    if (state.volume >= 0.33 && state.volume < 0.66) return "volumeNormal";
    return "volumeHigh";
  }, [state.volume, state.muted]);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  return (
    <div className="flex justify-between items-center h-full px-4">
      <div className="min-w-[11.25rem] w-[30%]">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-14 h-14 mr-1 flex-shrink-0 relative group">
                <img src={current.image} alt="" />
                <button
                  onClick={() => {
                    dispatch(setShowDetail(true));
                  }}
                  className="w-6 h-6 flex items-center justify-center rounded-full top-1 right-1 absolute opacity-0 bg-black/70 group-hover:opacity-100 hover:text-white/100 hover:bg-black/100 hover:scale-105 cursor-default"
                >
                  <Icon name="arrowTop" size={16} />
                </button>
              </div>
              <div className="mx-2">
                <h6 className="text-sm line-clamp-1">{current.title}</h6>
                <p className="text-[0.688rem] text-white/70">{current.artist} </p>
              </div>
            </div>
            <CustomTooltip title="Beğenilen Şarkılar'a ekle">
              <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100">
                <Icon size={16} name="circlePlus" />
              </button>
            </CustomTooltip>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center max-w-[45.125rem] w-[40%] px-4 pt-1.5">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100">
            <Icon size={16} name="shuffle" />
          </button>
          <CustomTooltip title="Önceki">
            <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100">
              <Icon size={16} name="skipBack" />
            </button>
          </CustomTooltip>
          <CustomTooltip title={state?.playing ? "Duraklat" : "Çal"}>
            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06] mx-2"
            >
              <Icon size={16} name={state?.playing ? "pause" : "play"} />
            </button>
          </CustomTooltip>
          <CustomTooltip title="Sonraki">
            <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100">
              <Icon size={16} name="skipForward" />
            </button>
          </CustomTooltip>
          <CustomTooltip title="Tekrarlayı etkinleştir">
            <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100">
              <Icon size={16} name="repeat" />
            </button>
          </CustomTooltip>
        </div>
        <div className="w-full flex items-center gap-x-2 mt-1">
          {audio}
          <div className="text-[0.688rem] text-white/70">{secondsToTime(state?.time)}</div>
          <CustomRange step={0.1} min={0} max={state?.duration || 1} value={state?.time} onChange={(value) => controls.seek(value)} />
          <div className="text-[0.688rem] text-white/70">{secondsToTime(state?.duration)}</div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <CustomTooltip title="Şu anda çalan görünümü">
          <button
            className={`w-8 h-8 flex items-center justify-center hover:scale-105 ${showDetail ? "text-primary2/85 hover:text-primary2/100" : "text-white/70 hover:text-white/100"}`}
          >
            <Icon size={16} name="squarePlay" />
          </button>
        </CustomTooltip>
        <CustomTooltip title="Şarkı Sözleri">
          <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100">
            <Icon size={16} name="lyrics" />
          </button>
        </CustomTooltip>
        <CustomTooltip title="Sıraya Ekle">
          <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100">
            <Icon size={16} name="queue" />
          </button>
        </CustomTooltip>
        <CustomTooltip title="Bir cihaza bağlan">
          <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100">
            <Icon size={16} name="devicePicker" />
          </button>
        </CustomTooltip>
        <CustomTooltip title={!state.muted ? "Sessiz" : "Sessizden çık"}>
          <button
            onClick={controls[state.muted ? "unmute" : "mute"]}
            className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100"
          >
            <Icon size={16} name={volumeIcon} />
          </button>
        </CustomTooltip>
        <div className="w-[5.813rem] max-w-full mr-2">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? "0" : state?.volume}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          />
        </div>
        <CustomTooltip title="Mini oynatıcıyı açar">
          <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100">
            <Icon size={16} name="pictureInPicture" />
          </button>
        </CustomTooltip>
        <CustomTooltip title="Tam ekran">
          <button className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white/100">
            <Icon size={16} name="fullScreen" />
          </button>
        </CustomTooltip>
      </div>
    </div>
  );
}

export default Player;
