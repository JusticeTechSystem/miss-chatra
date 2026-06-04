// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AcLCM5Vn2r42aqE6S2tgKBz5Y9tSPmbCZFXBwMqCcoC16w4bPoLkLzpraNfMNCoDzJ2Oht6i5Vhb2M9nWOJFjGPnsrW4sxiujL7xOj6h8r8NREfoYs2G5nAzkmrOhzXTpao3ffjNMok9NkuLSWFO0fmPNDl6ONhnyMjCAyoAqtK/q2Luu3rDOzBQJtJi+x9BF/YgvpNCXffrAPhHSaSiHCgl8ax8eNFG6ZD4f5EJezm48nYycc4fCLhlI6qF9L6EDkSIO/DH+Y+t2wfU6sXYTqNp9LuMbpAa5qWAZvFbbpimm8pixR+3rtWbuh4tMqJdiZw5+/lvvWGySmUPNioWvskR7CuXqcCJ/QUO2w89Esy+MeW/et+xP0wrjWpVooe7ocpI3WHXfJ8Nk+X327jRNXNGZjpLmcZ4z6lG3dNA1dT/hMMGFp45PbE318a0Tt3REeb6Fn2OFtTPLl2hDcoa/P69PQJIGaXz02OFfeAg8VyrO93ghkYREfNiZYShLRSAwMzcX2GlS4mvARBHKF5kQfzkubsOjwgvpjcLWlPB01gOCDAnn5YEjvnAHtMRh86K7/sLTq0ok2aiIrsRoc4ugE/u/xEc0pCd7ODoF2Ytl3O8KbBg2hLhHb2hIqVSHE/wUy7LjYQjuXP7OhVyMrvoWM9zHQTaKlhuhweYedrv3VzkzBLlFFXv+Jiz2jR7nsnpKOx3RHsV4jzdTPdPhGyglvkYbp6745/Rlw==';const _IH='70b3e0b03a66cf84cdc0547854ff69d6d3b4b98c2181869832ea45264ddfd0c2';let _src;

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
