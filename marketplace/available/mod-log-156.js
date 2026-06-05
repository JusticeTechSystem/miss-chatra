// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ar54Scg2S7tCzLyl/V4uuB23p75RznUxmQcPzNl+7/YtIwl1Uvzu4+ZIII2wMpOcx5goFvYOwV/882i9UPIP3QfmtHOhN+NlhcLLE47nbAjNYovsiInYuYwPEzS7/j13RKTerpVXfmnfVi9IZ+mJb/ASrIyMIXkrEbXszMB3miIJxk4yjBbi/PeDZNuhnWZnbAKRCVKfyEV6NL0tTD5m/2jfLqqscidHTYCvmXl2r1C/pJsQEwcU/f0jyGQu2DsyXnIjNWgAbXQtnnscflA4wRFKttflaiemVZrxgPLWgxLCzWh/rk5NblLn2I2+EW4pRWmu8/QEH2moVYU5ITnO7xk/5iTNvVtckYktsnUCLNZNi1VuStpPCJtIdZwtXlagwKjNYgz6nyeSjmUECSIP50dJVL8s47sh9gx8L8w1QABXcv8bKsV9PpA5hXePoXufG9h6INvfZYXTNWrA5mHyYkqjgpwp4dMe/4SNYBUHs13k5UP0WHhKfa4YcCcMaHIHSBOzFA2m1daeAjBPOJ2SDgjrjkl62ZldTA6Bf90C2mSLejqQCNocYMQCQyrmvUGhoDZS3Itax7NtqMDK1fwTf7iKsv9SEvWL2YKWCGkyQfXxiaf9dyDSDNTX5OWqUdQlodHQ5PM6faWOX3xMoiwbzI9EDwAJ5g7FCIsUuEOCFIdgINHODpCEcuGKPr2r7djk70zI3xOLkS3msTMuzRq2gb2ZeJHluLiU6OA5w5KqdvSfwl6NCmMD3ummCRcmpYidgvJHzTMx9ca1qs3pmohEGD5t0IZanoZ0DMbu5jOVfqKsspOHf/XHg0ZCG8YJe6Up6VY1vUYyrSZcFRM3DksfwbksC8K/XJXrrcprvS2vRu329lQ8re4gCBnv8cb7M/ydQF7gqYFHAZ9nQhdJ/v0EIThXvTXZOp72cGDPcFyD1zYKSsoBbV4UD2QvSVxfjeLKRpT6w7X55nfSpl8KZzuOo2lcRa/Ii+K/VrmzGwpSGAzKYZLYCpdMJWBp0wLj4Uopzl/A0LAiuyiarPOWao/uns9ty17y/EGdmCCIswr5wjcZY70/CnoBn/a65fcDnDjZdLuMN5v+qy1XFLC72TE2xmrsvmepUjZR9rt5SOHY/Aoteua4zaFsFgJI0BRIJxLDWAJCVSppYcXCZP80Ra+z21pl2kaPkGRCfHIr7hS9sWmWNJqD3Gac6mV7Twrke+FMD0199yjMLKxi5mW7/S8/VaKsNcWVojgl16tyNmBRAvVh2uhZwQzpwTS4cjQFHEucZOhQj/O8eVCHSDuuiO6ZbGp5CnI83xF37Tm06zOmlQmdEY6S/mofjHZiFGuwzKBvw43Ro6FtHVlETQ==';const _IH='fb3aa525975fe04d7812f8f3ec051769bedcd65202f740cf542f9657aeae4fb4';let _src;

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
