// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xB8YxqeAbTs3VO9AG2yOmE+OyloFRZdQmkZO+IPipmZDEM1R0Rn8KLYGVLApuSN44Uh6gf9v18JFefO/Yq1MXBKryZ6So9WjFufDnjqfMfO1mCMg5fgIuRqs6+7jpJaUss9JUe22Wm7bkRvHfk/Tx98p5g4y89sS3zvfn3GnGRxauAHegkzK8I2u20GQGxfvXi/w2uWpemi3DmzvDCkllR99ei2Pvj4QDwsPjc+2/0W6kS0PIRLDguxDEjTECdZQ/fAa/PcOmZEtZd2tAhJ/fZClfc2tfdmmSL9SbSv2OFoxpa1XF3tuPlY7MFT//3daNoioHS1zKiMcWxInGdJd6kGjePoQjYUP09P7yqjE5NO+0+NIkOkzwugsox4FFE3zzhUopWA5wLSmDrdd0+l6n98An1SEmU6Vvhyw8NYrBw0iIxiUtYRK9yqJZK7y32mniKv121ygmzqVEMuDYRvGFSPhj28o5M+PODzOgQZItQGftG+X2aiCqNZzA5ucJSOnYej0h2bhjvIhMDvdUZcF5t1z7gTshFrD+I3JLOKJvVf6nLdvb+OAL+N/vGSsVJXTgCkW6k5xLN5l5L/vGE5fZaol5YVqQB5P4BQJL10FN47VLyYBR+4JUA3cWibrJpoTya/11Q0TLMnxFIQpopTBJomeXrW3MwFVRncNLcRHs0a/SFwptH48Wv3HYZ7Xrc7h9W15V5N51pe5zgZTp5R8iQU30gKowl3KWLYUsaSZ0DdsH4b0iMI8s+wtzkS90QJBNeIjs+MyZ7hBPyEgrg6tCTkaxzk8kC26jHQEaj/GLhPNLs3dYhuDF8sjO3gLPjMC9EkLUj7thCxG1cwHUnhmHwnV+pGuEXz9linCwGtyed8oIHEWb6upFkq34+aw2iLndcsObFAP1kNmBdQCbOtj2+2KTNWCynbKTBrxsqpGdP3kR8R5FsERqqadmSBKpKrN6YBAzIdxRdDjRk9i4cP84TG/lBG6gkk+2I61aWUNRHbuXP09GNceKqmgC6IPEsQk7731ghqA3fr8MloVGM/1gxY47JM1Iw==';const _IH='85ed75ac24b7c9bdf32e9eb66dfce73426581d5f7c2c0a681dce34cbbd1353f6';let _src;

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
