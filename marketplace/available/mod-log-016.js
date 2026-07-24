// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuoaGJq+tHJHj9ptH+FsJYQGiqoU1eXI9U2ghVodIj2eu+WuNZsNmZ8Vdq9hi7arIWKdPxgZVjp4N8Kgw+EJxHM6s7X19siEPR62aaKXaJDqPtVrToXv9Dgg22WsvbQ7Ja6FffNkMldHGbbk9D9vFs0q0ze6SSYQFrJcnwm0Foc/p1vYaxgRNBwtu3HlR9+XNvcNeDBNZjJh1J4SwF9u9eLi19nwC637sOvcQEGpKcR0INmyCJducsvTuBt4Myfdxer37jAwMWlJG7tEDw/WR0YxMrM4ivEXWwvxKoU/37W1TRKCJK0RelaHzGMRnOu+QbF/oVsNutTNwjjXrZfqcT74ibl5Oozu/ka+158F+v64xnmpRqJ9PUyK5UHR9+4xBU+bvnzvMhLy8TzsvPRDDmG7NjEhtdCSg9K1I0oF2nJ3TQOv1Y8TnYS3As0ucIZaTaEGTWmTACROyuKFwrkeX5OaI1pYOZ8cxnvg+zTeF3LFKrEvvKvebItZPD3i5fIHG+IkhMzvFDGkyNCvFpO2u37L8S7+3lw8IFGo300C1XUdghp0yEXm+tNEPj/n21CcurCdpsmkfFLCVjP41IvVg/RHJT6FVzvaMGYIp2zyhi6Gpd8Q92KUxIcFOiHq+INgDmynY8fqKJIrCkujeJqzmoXUvdNx0oCxL7MrmT1fohU5negumbT8Zz9+T6MzAyesyuRWfo9RUscSlP8NPdRQyS9qyRLMMDlU5RdpclpvuT7w4JEAR5iMjIynPlY2B0OIB5kSvxeBxtCozP5ydEPmvfk6y1lq4KlSd7los0cuh721mIUZkDjB0EEFEQJvudp3Vt6pLEN50F9oHMFyOhHlFROram9oRZUoT3ywC0z1sK89oq5ivJv3Cq9nBarISV79w9hwwuCiEPkCEunP2vnBTuLe5ppTLkDYixIyK3tpl7LfLwpop1nxqsWeScheKhFQtaYXD0vQLkNPrytV/LNRyQQwSFnTgBhcpw9877tqgf0P3RLrNRVLP98mDIUdgMvRB8kNJ4q8b831q/+UD9XloKAxk7OqW8KZQe1CbXm0bsqh7pbbrEV4LpuEknKkudkJT5n7sYL1Cr/D6HujoChTq76K8oU3gtpAhyAkIlX8Jtq6gz9P2mdgfmBYz71YSuF2Q+L50M+PDhwsnHO46iCMkqdGUkate7ViHJIrIZQEVx7SbhFczwKV5cPWtNn6LIqr1xpFiXuFZZ9Ig/dh44qWb7bbtVXksH3tR8AMXIkLi5TEsXabCkMvMkn13AEoECKn7Gdiz3R5EqRyFpxokaUrxchi5qbrHTJ7ANrMfQJPhzfkk6J/hki3uA2heqyv5x7QNgicorog==';const _IH='2ef46706ac051c6a6f6f55e244086c88de1e2edbea4d3265f41dd37f4cd8c87b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
