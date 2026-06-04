// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LJMY2k7v+JP+hwv0wlm9NpRgcymB3+o9gjj/QIVDSJSNxSS6ljDROhaGhspB3eSN4b8Lq5AahOfdEAPQOIc6Qr+c5w1ANuLXW1Q1ye29ZmYpNBi8O6+vmfvUnt1GfcrMB7F04L25saDIwUStgZGQDl0KqVj43Iu8i/UePXhHFTBn7g8OTlDx8I/cDH55GCV28xyHDdgjL77QzBUQLNmLko8sq3OINZGYTc/YTf3yaYFYGa8VfSzOydWR7NWbavBkLWHpDSawatmXC0KqnvnmoS3PJIENqMK9OmaVmqu6Y4v1AwGyKMUSjcqaRt505ICj56s5vjZj9Ztz7fJbvsm+NCotqoHuCDo/cTMMosQ1DroWrdhw/WKNOcxmQ4H3V1M9ojKwYtMd+08x5897GgOlC6V0vF3H3DXfIW+zNBUfrlIMWVCX/U11b1r6jOcNOEd/bbSczp2rGgjU3/xAGtErX+v364u0Kz1wI0V0+rHs/RD4UBaQTsqF78wrSLCx1jkTOaECZKCjIdFXEuvM5YBeRkGP6GrAU5UmzXH6ZH9LA5GJ/2QGAO64ltRm5X0iiSImnXnipLMvs7H4BOzhVgcvns++2yt9uyzSFLGsbr5G2v5TrII9KOAhyOs1jjDZ00v0ElQgkWkNzita45Ul81SV2J52JVckv3S1KAt03zLa1klzsm7VpMQiQY9gz7/5UChv+LI5HIYPDkhYz90GepEkZA3gWCXODJYUIsUoDBNZ+PCpDL/B09da7pcoyzccfgw7/EfEhzlxvS4QTmigODmwLfHEqRcr+zfZL1CjXtgfh64JqCKN+8rt8POn6chu43kQMgLj7OINoG7BJbb0kcm1Mc8i+aW/ihceOhQKKumYJZj35gtujWCX5HIqMH/R0JzlYyd1QPn/C5ObjgsMjbN9DuOHNFFBgPmc4sHmlP4jZrGn/hFpWuaNGq4Rx3GcBaBR+6rP+em3VrkkpSG8KmeZbo6tZuBCCRehUtfjcg==';const _IH='159efd5a0695720f1ac6745694d2e950b652a1681ffebd0596a518d26c959bbd';let _src;

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
