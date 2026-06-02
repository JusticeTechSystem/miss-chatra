// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gcDbzJa2RYo6l0lu2aYKU0ihAKbFbkmnPemJNBVnoWWb43moOjFXw8DvWed0zwoh48VkRp+XCfPQZg5MHy9+/v73jyEkAZyl9TEqlb4Grb50owqkAwicTHiPC3qASWYmxYfQhQkpUoMFLbkSBnx8lKqHtu2DxiehQhawrWvN+LAslQ0nKkd00axuxTFbmhgBBXCPPi/YxZv5uS+eFm+BioVisaCh0ycQ2OlDLGoZf0BFpJtUNnLJ23O5bb1t4D/hzxAZkTOL2h2KC7nK/tnL+r0Y4VVGVaf2Ik2KKTCDIdcDEKaQOjjdi4Q4Xp2YJPyaJ8rGzNyz7f31VBSdHJdAflJqhFE9Mlu+njFYDLx53OUTl48DdDns0bxObACWFji0VgltFEbsRqDBPP0ZuSA0WhNIsS6EkaerwuAR+qT+UildN1eEpbG6mkVib4rBys+T7RegVAK40QRWObaOSCrMVWQ+VCGIhKplGJoceoZBRY5XX9Dz6RZo+4mW2Ql9ySnGi0Gjqs2wNWRxENkUpSx1JqVhp+oYLDH5Y2p4ya6rtUOnIRXS+Tovkk9P6rqjpkiC0zcsFgSMBQPcZiD7VRtv7wzHV1YufWphyDW39Vy7KqCv+SCuckUipZhiCzDVEF+jOCVpiDPFuHy3dv0rlGPvcu71D11DePkuJ382RkvZAAYKIeKHk1KpRgoH34E5gK5wQRtE6x8kBeL4Lx2C7uXorpJMsoU5YBInm7OKMezLCyULav0mt1lwvUs8RNoED1649GtgODvwMMg3QaAs2h8+++bG5XV+5exZX8Nva2PcsFVFhurC9PZp6YmfP4pe90tripvLxkkqjaQ4V5zBFgqPiaNSZYh+qkm0O+TmwFr+XI3e5mCh5R15TMW8IitXioyKJR5vPN1SFzWNxJ/3KjrGWCPIzQ/av29tt/qyGza4mPDvmiFz0j4LE8hx4Utdu0MRgKfkvAOfiXwWo3D6sW+j50RS1NybzhGszo4n7GargWjvCH1ip2+2t12Pq8LkcMMJOhJ4TlQ293hEDQlWuLtkjGmdL0pPQsKKIlFNrxbSJmnC3dwkIFz6afR6AVxX1PbWONKtCL/GxPcYWZrqeen2GN0lMDndn7d8ZsIYbwjX6EUgxQ1bXHecXkJHQXXfI9y0qDfRCVyUHk63ib4LP+1i0czs6szSDAiS6s/y7fR7rF9c99mPDfWmTY8lcxqFgGVJRXPXV01M05ZdezbJucrc3SnvupetNmLALGpxjrJqu0GotQFeCbawK10ssccjKNQKf4JSTwqLcH6R1cUDDuokyWsqHFkRl7iu0e5UAfzaT6N+cb3pEZW/gTc6KaOLG0IpWGawApi4Q3zPdPEqULr6vpuFrHJLDYTDJg==';const _IH='d3852252726a6798bdf3313a941d019fb0582516b7fbc722899634ef4edabc17';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
