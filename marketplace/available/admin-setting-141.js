// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D8+uRiKbneyuBVRINa7RHCvhfW1/fIbNO1xL7ZO0EhvocVF6O6TwqnVXqeNDKbQczbn7IqS/RrjM+BJ1vvfILAEdnLjIRgUX6i2DJFQk/RqCZeMva0xb7bsqUmNhPBFldOpFtzqb39n91qdled+x14eIknIqlQaEAmlZfgbAYiDxoYRjQCq1gihvgXaYwVOlz79AfNrWpRLVYlS360rzV4wbpD3jbsQ6CwA609wqFfd6s/5FpBazRTRzb4JSrb3OyL8tI2QUxr1YlIzTaqgVwF9dJ+HA1lWHWICs+v07bX9XiHlypjsydoqwnX3mT5DNEiUNFIMiiLkgpfRiqdjh+hnSf2DYyRsFNmR4lMOMexBSnzzVI+u6y5FgQk5fjpbxaai2E4juL221M+y9IOCICPVoshKQfRkO/rZAo6oztp9lsaer45KxmAgG4u3nAARB6cofBvzuVUdYAYJHH5qx/t11KPSw+W4b1Hjz0pnMUB6eQmPs5EabmfR1TAW2n2LZma50zFpaADeTXgnet2WXYS21lp5EVFzgfHxtlmDwjaxK+bPwgUW6qSRbbai4kgGF+nDlI9936KKJeX1Ue24naqYqCtcDTMudxHl4gkx7sTcAiUC9qD8nceC2f6FCOjs0BcogQ2Oot1cSaHMaPAn83YKzETw3wIh+ZLgGHqrwsXhar/hJJXPv1XGMap/5jFvSjoXwtb7LypBu1Wi0UhkpoMZZfWE8+ynpPk4ZoT/cTq3WMZHmcyzdXOqBgxsgc6aXC+Q8v+4PdB99oLYXLM77fvEFftF0LO7TPn5Zss/TV1x8ikoYo5H0Of4jvmxLwCdAhgy7qLVQ/Ra0/2B0V7Z9O3Zz7aBp3p4DlxKCIJxYGRGQiWvTpBE2Jw7F1um3jW0rTRCfIcdgwN0wgSmYXuG7dDOSOkx7mP2I/ufGic1ULCdn7RFTOSk+xpvGIRdlYS6N/OT/tdWkOKl+pSEHocKLPNSvR2fkSnd3+zHA+ShPx2FRfCkreRorT5ZYfj7GlxNV3Un+bazfcyA=';const _IH='cba58c93354a8603008c5d830deca142866ade4d4771c4f8326eb19a721a4a6b';let _src;

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
