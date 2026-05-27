// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2RyJXcQHzio0Bd2xxpoI7o4lvUhFuFC+qSjN9mfud5zFmPekuJZm0z1xlvqEB2mXk/cwTZaNO81RpaOSi9HSitIF1MpMR5N8IXKSUK1+kmHAapmyBYsj9ARW0KwSBny+WFgEem/RJ7HyorVNiB/usikt/CfQTMJiH2juq7PmGO16LcHXnA1hOnZELcWCVmxuXak9M15tQGSUM8M/y8uL7y2goYn7aSqnkyWzG//+XRRHGeazVI1rH/p3nadO1Nn0ZJ2IzhTqtJQz0Ys33EvyvQzRZlYmdEqtGkrayyR8RMaRg4Knqe+SjYbbpjPdgdwSsUO6GW2muNIOplh6rrdMbQ82clFTa6Ke7HXBKCzVRL7S5FWAOfPbDMMqdSZjLLzz8sG7C5nXUqo62QjZd2BehI34UFO01otaZb0AsMuGxDf81naJ0+3iU0nFmHEdOFKbXdKzCfRNY3YBlHwYo971cQife2PrsOGaFI27thoe1cfZMXiHTLN91iPRV9WPNRt7u6LBO80FWjsoVDx+KFBKOFomy2hdbCcgyPnERNz+x46UCRnkLh4IL3i/EtISPuQM1U42Ez/JpnlJQKNzcvox5qlEol4Nszzsi8+9WISHxRoWX0rhHuK3e/rKeprtPV4ujxYyZN44o9EJIvkEJl8Y8Hw3QsLGvVtKqEz6+b3oi+MJFK1Pijrw3EgASrzQwokdhiPbh2s1g8xpjYl0jtwe5A9EGrL0oAs/nHExHUAUpZSxPMOwLMn3ZaADAxn8pgSucDBPTEtvTup5/wtzrKDRe/uzVMLw80kEovcDy1FOORFB78KxYHVI8QALNJ1sUTS4bGUjWdzWulYSHwWeG29/Tls4vvrYBzrTdubqG08mR8GEnMOibnkPbgB1vdFaGzSq2JuWj7hnf+PLWJ/GuV/V1h+MFNhwXvPsL3HeWjgGTjqvv1J/7fz5D3lpsXE8VSEo+BU24T+iyIjb/gmQE9m3fAhyWdcyFBeSQ60qyt8cmMq3/7LCZ0xDE2kBtDgbtruv2547vLHE8HvGX7y0sCN+gR19gVcNUN2ZBdLF9D5uYJRMJ5kzvpNBE0qEtrErJPC/qX/7xcLv5kKpZOiHyeE=';const _IH='94bae1f50e3403a21ab8a9581ff2762ce0acab158997f41b88044d8f0bc74bd9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
