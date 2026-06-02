// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c61Ce5UAB0IcHLWZdBijbGCki8t2weUXt0+TgtILgdMRTbMxsqZnsWj2GFi0xl0mqXEnmx8pRVO3m7R5lury7nOu+K1Qf9EBkWZHcxINW0HH5MloiT3nxlcXgc/zpLO/EGBldUuqAqRGQZzm0OKsyZjGylpTr7uSpU8MR4kBUCWaTHvKA70DDcmk051rKRAMamOfCyRy62iGiQd1dYRFidh8deTLKpOKU5D7T2fzSmOIG9itL24xDar29MA2c7ZSkP/jM7tPt3DRO7nohswv3+aB26sn1QhLx4PRSxphG8+qNjbnV8D5nm7goPWFX6/73cesbbw35E6xoCODheDNXReyA/hXi4s54RSdwjNTv2vDRmcp45FmydQXArm8TBCP/0ZJ+6cv5b5/XXCUZhl8oKb5Y9wJcShmpDNNd33PQ/Vbox61/KOjNt9B8TsA75knODUi6xgKWlZnYikzTlAhV8V1bSN08ecxJojBmFzMgniHMSkwm3zwN2TR9Y1xPFNfg+yBp2GgFJk+Hg/HU9vgkYrxjI/s5vHURjRQDsHE311XqTC0iEBDNCFus2n8W3dK/QHIt+FKKCt/36zKl/aPmAtT0WPLLB6B30QB6j8pmy72JlqCErggT+9LMnF79gnWTZ0RicBUEG7bFfIwC+h0vSbWl3KWAKQCZqlEeYvOA+951ddxqls49hHDiEGLSzlYxhDme/kmxxSv/gKLzMkZoGsc78w/UHNPxEnlPCZNNXHXcOXjorkHKTYGaVm5Io4fG7EHBF9Gjb/1c6ZMVl80HUsaiV01UWxjQIyTtwdeuqIHU9edAyW+W2broySVMLsWrzhl9QZAnolFwDG2hHlvFupMiLTH3JZ3qUTRkoK4wiTK2cVFT/3r8uhJBpbeVCHvo7IjPJfeeMwFGtbJdXVVjMVNeHPYrL279PValESl4lyL0jbjtDpc9oD6veqXx4QAKjcgsqX2nD+wEZbGprS9NgdW7UUPwBB9r5swQdu2wsEysM3PqOXs/pcDD3l7WNVWSq8cZJC7l4DS41H6wYY=';const _IH='2324089bcc429000d79ddd11a8e3440c832212523cb1b4e922f2b323e49f101f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
