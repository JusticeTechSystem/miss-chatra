// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4dUASAM48P5lZ9iXIfIMRAwai41XLAEHHkKjfMS56BNuZxC8Cv4X2AqXcBbBDetnmH99m26XhhsZRN7B0kQ3ATkEnKGT0Ebf8MWyVByTRdVIfALUxPypaLAua6fJ5/dwzXNJVd9SWv39azw7fm20eY/cmMl/UYCj1MeFZvi2uY/PaWhncED+z8w3G1qECF+igvAPEdgG8pQTvHTKuALhPRbFgLDaFdAyG7tt2WjiYEnlU5IyTY20Bm0dvWDshK9sAhpE8mpAXrmOYGQiHGTTpJfmYFSjQuohm4g8UQcAhdFtpDK1/KW7inGVGUFpH9dX5WDS29ZGEM4YjW6wTgczWJHixzEiOD2a+KWFtrq5oAKEtHOXUnJAFbKl3w4GGN8McnZSHlIjFKT6y1AsMndoXyhzut52leHo2wM5ZCIEb4zUmgybBr5WSNRpo6XUUBfvU8W7C6UAjt6q1cYlrDiWLil2+t/oQvNlErJfpC6fZGbNWyVVEmJmWudpGNgEzgxf5qAekeb3/x118LrEEPiinGHBwOby+5xNg52jNII+tE/A8sJBgM7WgPVFE2no9+kIhWBQDi83BSzIwDqLOmv9afl8lBb2Nq+MnDz0knX6oPkwi2Dlr1Ly0h8HFKBXkJl9QWy5XixmMq/FjVLpwPqk7YNuwxSnKgNCuMyt3BFuFyS2d1w6uUmzPALyETypZI8nXDvfdeDysWNOEChZp7CIGnDzR+VEcQEbq6d93GZb/54vpwoabB86lgqRrPxUyJf4c1OMtqidjzdVtbsCD/dBKW8bKlhzMY2mOa6qy3PRyP0jbrTWapwRFsUaChG7LJUws4l7wf9wCzlJXWIJblS73LCUWe2ImdqoIIuBUx7HVLUjgC+ccpZmcRYQ8Yw76+Ywxr9xyvO01FyW7GgU4VG5es534LJOzvMB43GmDBmgY9orCIM4gHZ3sroQ9YSVe6VJw4nGXg3xTxPYYgDmblfdxmy1E1kkLUoeIgQ08rUVb1/UQHVuEAfRk8KhevLDbq12XQ2L1v/Yg8ew0HUqznINeS9w+dbVT+wU3G6vd9AA0kwW98i4CjClqSzse5lf5a4+auZlMIIVJ/Db/pHs1qxb/AgSQf7aFKqbWb25W1bThK6YtIf1fyAg2fOQS9Lg/k4GLc9TD9q/WulMU/NZUI3GJvwVJyqS/a/6G8v/rG3zySVlJC665C8UmzHiY9H8fdjcUIb0g7K6zzV+sU6gJfjM3paZgtgkq2qr/mXPE3nrhWIfUJx4Tb2HcU+fY4pT3E4g+d4yjHaCzfqUAlqv4JQt/laNfryWmusIwXTHIJAZojFEL1HEzembwhtDeM6RvT8ZsQqi/BKcjaYFuAeElL1E5PmBFEgdfD/ocp+u6LoJtUIKQRMIuTEVYQ==';const _IH='87258547af4ca66895e500116516d908acf7482ad6663709630060a469d460f2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
