// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HKGm2E3jzYDP+vsQEeFyPCAG3hWSTzDJpE1YTXBT1fPjmg8jck/VHGw5yF9Fw77Gb5pOoKjXpMizWV3NpeQPU8cYKxAdQ69AoS04V6tCE3khohPeEPH5KA155BiCjQrMHLSIE9iirqKh41iREX2Vh3AuISMKavJ7zDhkeZgHOC2cH+XuRY4TEJ3W0gsQT3/3asrv8W3+EHJZ8bhctjjLRvJLzn+sWtMpFQ9iInAQqqyJVoyANjXBaRHDZvt74bxFyKv0jt3bwGxoar5MM7fRalzpFcw4PIXpmXztYM6q2+7vB38KkREM93gfgwE6GmCq1q1ZZTM2HggqDwUJtiqsD07ftaErOpREu1Daol6oi1vXQCt3OoBNPuMp3EYolV4zL8j7BiJ4j93plo1FFFBzLf7e93l7TwMQOLXoUM2f4k98/b2HxxHbH28o3YaKakNnYD5/mIRTEgCUpgK5yoJaPfhoiSklpvhRpentNyzz98K3+N4KwDtapGBkk8Bi+VoljzBFxC7UkoXEVzUe9u5BhNCiylOZP2wDJ3djQgTagGtwCYVj12tcxD897ROcafFLgQaVni6brmlZ3A03OQzSIKcE7d2Ula3J8ufU1AdrrMP0zv4/8Nh+XR7JXnGjA6Oga0JKnjClnZt56oj6Kema8zsEjFv+/jx3DfO21Jw1RFp68ESUoG1/dLWf9znG1kFI+kuQe201bvMEDCdpid7onehnKzpGfDHBsJw8oekZ2A==';const _IH='25ea2944796f763f6557831861c579e7c3e810d0eb2bddc90864e136950317ce';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
