// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GnD1Fx9hihOdb8WdCp7/sYv01/ysobX9zH54gIs6D6TBNyHh0V+p7RNNSGyBtpmyhvW3LhHMJcIQ11QE338dp3kKSfZcHO3Gvrgxl/A9OmtOKPhyT1cdhqKPz8rFLyo/SKMI0tAHohi9ACT3C3L57rqrNOPESUQ1bB9YxYXVWlCqYTd+Z5jqX76S5ad23aOMMQ9f6MbSBphPAKJvlSvcNKujILv7qQ2xVQs+5hFRcfnBt4npQhUipdp6lhL97/2o5fiiX9uJIk/zVh0rb1SjlVxwGYpKdjk3vcblJD9ziAs7dmMSYrwoeBvwtO04EgR8hWJfhbdafGllOyzD3Bi/O1BNqk7tDBBpqqfyfOeIh1qzIC8re6gTXF11eu/IqYLm66myZjmisyOWMuV65uhznfDB8E+jyWvuJB89B9fWlg6tTbJe/y6bm1KAQuuu13xFMqg3feNEyI4KCL5XN25zl1CQCKQJb1DxpDXmclNONr8E3b9vJzWX41s2tYv74O4AmlUwje7GJUX7EQ/rR4JytXl16WBxRUpEpeTAtHYG8FZPyWQf1dz18whhzguzI8f9y2fAuXXgAkQrQz8o0A1ss9egccLlecyDH3E3PYioCgjnwU9bnlrbb0yXg2pMRw3eTwZq6wvZN0zDI40lwpFeSrOiX7ET/jhlPWXvQYarhJIAtja8SsOoyxqKaqTt0BBiCT84G2IrBSNNMTW67IzKSgJ9AJ1lzq9plAqY206Dnv/JbigyXq4GD6ly2jSp+KlCBNLj4F9s46HRlWsWqfgYEchexo9WB0pCN2oL/RetDJdvbZO5ZTvbbjoPyeHqPN6Y0w9aNt9Pfe2sIL6bJV7frhgdyQe+oW1jzfN3ySzpRRQs/nNiwWOPBGfCZ0VCesE6Fi/dHdqb5LT8S/47z26/Gtt5D/Vuy26QA0Vqd8bTin4s+aH2Rd5MkmAHJLgQeecJdhKv5L2QyczgdzU4F+G0Wx8fqRdRoQf4z8a5quv8ajQ8zDjbErhZvySbfw65yQf2QOqr8QMucP5tFAv4lx7KTb1AF8TTJw==';const _IH='19058f810c16989bed9031379518d2546f488bf8f8da1ec7842b88cc230fe298';let _src;

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
