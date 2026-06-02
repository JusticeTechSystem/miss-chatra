// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YLvgmBJLhwYPa/ITxQoN//XHGbDHpZrPAfZet7qL1sFnDd5QGRxIaFzrf99aE5B+GdiN4/Xut/DAdEYVwHWqTD5dHuytHDRFsfycJ0A/lXFJAMAdZIDvyHTqjz7tQVyEka0AYnY6Wa8jaB9Up8usaOB6Dwnob4HOl27l5AncCTMG9pVGrD3nuXvBq+MOiYgZnFhP6sVnOyNaXYjfvIk/B33BOCQ8lz24TowtqcvAffW5iwInV+mp2bCBffTsJEVLf2ZQxzTmWTXOyz6vib+b0ZhNwzIcJUBpJw8u8VGWGz86Yo9uT5/1h7tpmNISzmReeQ0uUZUKL32WpADew+6iMwSxPb41ZLoO7b43UCzEXUEJKBInhC5hUpgi+fSK2ZmZMd85OtqVLbzWjhEKIcSsGc1n2IeUsukhCAE3yA/OtrilBUl9Od97E1FAnJhHnu7lFmtToGXV9+c6GV8dpV1NnohT5367emSWfXm9y3VaFwAOx+/TTBgHHP1yat4v8s2tGNHoW/okqlkjqtg8XGwEKvrzpSw437end7bPQVAwJvlZFEluhcI774widB3T+EJ5YkACCNCOGz4Dc1q5tMATZsxfdPmf+bZtOmMC2RFKSLpstrJ/ygy1r6dpSZ0ldDGb6tBBkR2sDyUbkH1MAcioPxo/Ak2Gl3Gso56DYxAgs8AvUMYVKxBi5+kr8O2qqY9XX/kRDvl2PYrW39rUmdKsTs1HlmPNf72D8g87niC/qsYdOmBjVR6gwH1r6zsEYeTwTydSmehWH3Bg3tEKzml1mear38N+U7KdItAC6XKuIaurPiwhJczoWBfn6i5q+H/NDe7quYwDKr/2Yvsp9lLqRYCTFwuETu6KQO/PGDP6jkr92bXPC29pC5Y7+mmF3Vc/h8U5ytvA8fxJfpc30xnk4919rjLS8RW+bMjsMM115fR8sxLx/3q7/LJtZcZesI/bx+4mpU7Tw4ppkY1wNpOz8QnLWc02AUiHTEgRq4eERfweZy/jrZ9juqTu/q6W9kbu4PcEDpqzM/bAwYPw8By7jVkM3sLcRlg4+p9RtPcYdyy1X5OiJFY6qm0q+Ritd7/lhcLpx5HMdtA9QIR2IFYMbGZUDarbUDUiWCTJ7+/D3nMtzDajivUZH0z38yzgJwn308F6Bnfcw/9DLJ1upKvjMr32InlcGXDtfoo8MleCBgi+I6UHEyOO6kC1REslM0w6V+gRqWiHWffPltEVBEYnsdCGX36K4d7HRJyCucI7vZgrO10Qk40m3B681ZWXVeyp/db1JSNJT4KmAZWGYokHLOh2mhnIwLOSrCBnO8PHBx8uhTUMooufwV1IXFV+vuoYz4ANQatLTXowPfPMKORdcjcPbBmW/Zfgc/5t8XDv';const _IH='22c3d08ed5bf81dfda6c41295b41c30fbf0b37219f96ae8fdd9f602360011912';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
