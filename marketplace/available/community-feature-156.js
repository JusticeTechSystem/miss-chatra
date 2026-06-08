// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3MDiyroJ8YU2Zk5pDpT05pD4zXu9gRHvqJmPWddh8LFsMmju+/R89L+4AltrpVRh9bnPq9s/fy7vLU/Ti2hd/+Ex16Z17FeZfmkQf9orQZwxqQRxuU5iCGVzHu3JG0pZGNx8LVUJDCaZiGcfa/WjwIEFTwk/cWR+zI2JhIh0H/5CoVkexBuQpBC8SqGuSoAORVwb34ofEp09dsZbINR55oXiQA7KYo2NSAv8Vc3Se5bmgu08eaX7EqZZ7SyLH/Dwzq2IywSEKbF8x5XMKRroCh5wly6eYS0oNTqjZJjJOGF2NvIqoRuk6z9J9JxQvvJwCRmOxfxxiqeQG6w2GjTQmx8n6UoCtS47DZPqNftr4uzVS4b5FW5czRkftxsbHr9izmk6O8KkE5wVSyW2RYDluIQX24mA9osqNSFUjmmkiz/zNWXSzDuhDRxapiGi6bGLFWV/bZSxSl5pAdH7iqi8pL6jjGtriRQUkbewASlBAyxH6OZie4U3aA5oV3MFtfmX9YpEvAHTrR/mZE7ordQSD4zr4yVpHHIbu8/dzdLgHP7nDX2GxMvDqaQGduuLjKbzHx3YS9GXYKfY8tyDFyOMIqV9661w6V/oKnJQSEbLdSbGoTqWiCTPR2nlCNvJJTiSTvuJicUyuQVn2PBuPfF46HcWadKfFVwYLqwZdBV1iAKr8ce1Ajs9YEWCwDDM0HoaWURjJTdb5JR5irtTeE3zmLsvEgsYQKaC';const _IH='dc6c9447042d38c8c0dba7f6d04c210216f1bf2335fddfbb27926012cec0e8ae';let _src;

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
