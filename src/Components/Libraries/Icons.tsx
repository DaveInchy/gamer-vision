
const Icons = ({

  Theme: ({

    Dark: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),

    Light: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),

  }),

  Webshop: ({

    Cart: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),

    Bag: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    ),

  }),

  Media: ({

    Play: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),

    Stop: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
      </svg>
    ),

    Pause: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
      </svg>
    ),

    Rewind: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" /></svg>
    ),

    Mic: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
    ),

    Camera: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    ),

    Sound: ({

      On: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ),

      Off: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ),

    }),

    Video: ({

      Online: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
          <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),

      Offline: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
        </svg>
      ),

    }),

    Network: ({

      Online: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
        <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
      ),

      Offline: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
        <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>
      ),

    }),

    Volume: ({

      On: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
        <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
      ),

      Off: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
        <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
      ),

    }),

  }),

  Actions: ({

    Refresh: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
    ),

    Menu: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M4 6h16M4 12h16M4 18h16" /></svg>
    ),

    Cross: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),

    Edit: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    ),

    Write: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
    ),

    Send: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
    ),

    PaperClip: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
    ),

    Plus: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
    ),

    Min: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M20 12H4" /></svg>
    ),

    ZoomIn: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
    ),

    ZoomOut: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" /></svg>
    ),

    Cut: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>
    ),

    Like: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
    ),

    Dislike: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" /></svg>
    ),

    Trash: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
    ),

    Favorite: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),

    Heart: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),

    Settings: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),

    Search: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),

    Options: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),

    Reply: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
    ),

    Share: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
    ),

    Upload: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
    ),

    Save: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
    ),

    Bookmark: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
    ),

    Login: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
    ),

    Logout: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
    ),

  }),

  Signs: ({

    Magnify: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),

    Min: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),

    Plus: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),

    Close: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg style={{width: `${iconSize}px`, height: "auto"}}  fill={fillColor} stroke={strokeColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),

    Question: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),

    Info: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),

    Warning: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),

    Exclamation: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),

    Secure: ({
      Yes: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      No: ({ strokeColor = "currentColor", strokeWidth = 1.5, iconSize = "8", fillColor = "none" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fillColor} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke={strokeColor} style={{width: `${iconSize}px`, height: "auto"}} >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
        </svg>
      ),
    }),

  }),

})

export default Icons;