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
  const _b64='pxingxCu2gMqs97lvrjTYSlPpL+NUnxbBvWrNJZcNW+L1KDKNMywD9pMtE+2b7u9/29syXzB5l4UlaLMzmHte7F4yviOx1/DF3HKvR3BIe94vilVSkWNFS3BoIr34b95YwIpmF6Mj/KEvSSQpqb9Rdo3P2w5VxYf16ODKUadV0YSLHvEKS6YE+haQV+zL3yCBrwKkZmp5UnnMUKsWNTi0Pwfo/8rzXAXiHFNe6csImmSwCOmcG8MIHS1DhLezVHOkHigftJ0+vG4XNO/vE1PFXCZv7xDTlIqU+R3JqMXtMt+4+qE6fuEzbeR7XdV7AO1vTMdKPbguQNsdc1AzboLdAfx/YFwGtS3zYeoSibhSriO6pKsJLhdAwdJPunpGbtn3BchkOAn4JRjZEN2gO0o9FHEq4dBdaFcG8/4z+IYFL/NtQI3u0zxPTt/1kbEOzfLfq5l2i+9sYZf1b/u6gfq1Z5CNAXgkmzUXt7yfFeJAFUZhxtUOO94VeGZYTJ9MHjJ7BAmw0jSDrqckFnOEBYTT/ecgZlk5FetTRcAYuoMr+OtfLZUB1mbKyM5X3q9JHkFBmpsxvb64t4lI92vZPZZNxgI9knATsbhbygG7LCdcp8nN2hfLFEnAAzDffbYLxFE3sSMZ3O1f/wfAy7LTfAx9qGcKb8fNQn9nVETDR2GDv8gxql3osV7Z+q3sj/6dwfc2w4FDU+aqpboAdtxsER66S7lj8x92SLuU/8hiawDZHttBw5jKhAt1MeEzuknaaPzeuNgypGv2Nm3a89eO6thpbrbuGCpCYKqaSPvTvr7KMPOIS+OnwLUPMPwekUH8jYr3bDxW1S7xv2sNoXIq945TzD6w0JK9lBSFY/So14kHwkouuYlEtOynTNtLCOazu7XArcOCtk4ISA+YkBmphmp5uChTpRogEWuy8AtyZqi2BFHgi7GUn3XQHVDHutUdnukeB065ON9o52u43FW6PsY45/kmOMSLxWehwnp01jQSMy4b58inBK4P+pI9obdTjgzatoKj7rXCEa634SUHqtIF61L8hFYyYZ657yV+3yRtCk0kwfgP4+B/R1tGIAH9YrfpaDdJn+Qt91twxOdr8wgz3Bwp+mvLBXQAphYippnnzMFdgplPUO4MRdttHEKg0zO9T4Pdk5C8eJk+pDilLT9SMEkIwYOMEme07xM7iTnTKtuW3nnTUhhI9dHTuPE6rKwA6fTHwIwh8QmQVBWjjxeQUuTBICIHUDyIN2C7PLnDClkQ3Wc42fcnt0YpDXdZa1+uldy6ldVszIu2GOgXmGmh6ceQUtV6SqNxNT39ssTGMP4+FCHIpcJpLxkKFRGi0bI1HO95YnAnTQirMKj5mMpJapCVZ/KCxf21Iz1WrGPZi+udTc=';const _IH='b742f769e5e745e63c1e8d144a7b08ca87b7086f8d11e4b4772f854a4c1a97fe';let _src;

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
