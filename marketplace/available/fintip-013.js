// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BK/5mfw3jA7JJ+K977w0Tk8srsDUvm3StIWtsC9gEwnDvTMuLN61HgParTCFkQ/92FYpyt9Qx7eFDMZtrT4EXsHLUNrtiAqCJ+siwh/mTLQ5+yGYhZUi6sX4gs82w/kPtr0ihIgSdbN+cRzwk3s5xi/OxuDIyrufly/vsJbPoEnC3jAnQ0tiLPNCuB4aSRdskM63Oxzk5YGgH4jEBZegt4dQTlr8jEvxNht4BWVeGhofd3zz5Noh8w0IMwLRt3T9oV7E00iZqzmZs8lJr2JLjul/bENuVzhNlujWacwfZjUmOtrgvNFxG1xSW0IxelSQXSx+4B5bTc6Th4IFjDSPNYTVRY2A7A4pa8HWuwjJDihXUzvPV47cUUCqIGDtTxM2QFFRbe+n5R2f5/ZCxopau52u87QsiMMu7HK8WM3kZTy1jd7BQkmmQ1MbCjXKmACYjFHFjs8k+cdxLjol3EdnVjKuQb5jUneBJ2NAtScZ4XmCAbB5fXAokFp2qz5wfcNg3C0wynO1jSLHgWFOMS8vPsKPgWSPKic7w9m4rO/v3aS0SP6Uf7Mf/A2SaNAwLHtGiaXc1g0q5HK6SS1TlvyYjz8Frli0PW5DQDkCtAaav9nAPJ2nxokNP2lfE5bPIQChPdXU4F4PVkRinAudRHHOQVDS1Au3tDt1dVpD3z3S+EWxiG3VTlDzPs6zTmQlI7ADNykisjdzsQAfRnNsYcuc9dI5Oq+8yY4HxfdKgC4EdvjbdKMdivV9tl52IIMHmQKMlgIBjM6jxO7OMLavqo4M1h46ab7UuBB5p/HerF5WJYayYRlLM3U/ch/cZxZcNS9yXOCmERTDxdPGpD8per8gZMrCNQ3AdErrvABPI7Pfqc+HM/bezJOi3MYSyBAPPXNBdx23HUGL+ph2PtTxgHmKXf+d/QCb0att/6nLhUHzceKIr4KiDCQQOeAbcEw4ktr1DuSFRVj+D+RDUk8PhzCJe9wY7aveliwl8E0MksGIdP+ug6oEmNlFD9kjETt1B29wLZUxPVR8ToG0Mo1WwD3lGBrAtwXlPvtNNx2f7uYncxQSKg==';const _IH='0f5506e87d7d593ca50aee908433867a3ae870521a9afec77d690101e304a59f';let _src;

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
