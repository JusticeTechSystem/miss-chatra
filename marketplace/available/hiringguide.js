// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OmSgZHMEw8y9WoyPnY/qPO45eTNPXzYsDMxcF5IupcfZzI+oe3sb//q4FzfNx0oYM/VDOBE68R967pDSwdXCBQmVDjPThak4hC+wgkrqOZ+IxhRE6a3VVGNLCUouPGmCjf1hwDgkzqkC6QrBlzSC3wgcHHtfSm3EGrlWr+rI4CEXHcEIpel7PQ71JtEvKBodqss/Jb+4ARa+deSYYraxxFQ+5tJOyfZbT/vM+NZTdHCl/trRbkT1WmmTFDbqII9snEQ4eLRYOBusdYIyBtiwrFef66GpYtKkKF9y4vjT5pMvy5qtFiY6YLSDubOKJ6H0hpioy9BRVTdEbiK9xOYe+JNOAMNZmmALnPleCXBo5uIEkDpddQPP3J8X721eJaCuEj5AMf+HCW87g3l5mhwT0vW5T0Q7wZlIz58dcQmsTmFUKd5FTNPTDHHYtt+L7vs6QjMXUuzCppTu3nGJrJdgwBkpZO9YPUn1iX7DF0AxcA/PiA1wfpTlLPJ3Opr+fwk1EIsJJq0ZIKjnE26ChZawMIqdP4eVRYfoqF3h5psqlDN+FRGTcHiSxhHcylLsL3ePOL7jY2pIYR0PAIrwAY4tx819Mx6WmlL9z+o+7Mb61r+8z0Gg4wz4sRszrplWnjI7be6AdgoSefr1xKt7FU8sMIR5Tbfl6P1UAky6h2rAt9LFSG7fZswmof8+Zo/6itT6KMfEnUwfmmOE7BzaX42vETRzRVZj5/fVIbvFDM2VyfGTYjjO6URXSGcGi/kNlc2Px109rPLJ76ghxNLh0GfzPJ4fTtGQINhNCwQzW5c3dV7yBcFdf2ETbd+gRcqxxJxgmGGfKEQpY3VbqqK7A9kFrpgbyfMQTObalt1h12MKTFXox6ygZr4QykMUPgHlyyLNfM1t4KTtoaBV3iUYJ9grOd9wDFafcxFu2imdmkIwKBRssrq02hqC2SrpCDvDem/zmr0q0rjkVPhkASj+jWXpdJh/J8idrDjGPLN1OD1wEs0vBoGDo/pvkZJdMZHgFtOvnEnoNrIx03zq1ylX1guNLPzLdhaCMUezr3+zafTXSmh8Q/1fVpppTGGsgUmfI9bQcBs3tHxiEL1IpXKZKiF9cv/ZjRPtwtW+nnDGHELccOSeLbGqYaFuAnxS89PpMlwDSJ0doo4EJ6CjF9pLA+AJPwUjjVJ/XNwLiW50gE/skUf7MHZQ2sUk73SbO5r3MXhKOw==';const _IH='e3fd6d68fa33373cfbd0bb7c0bd628d0c98f778e7193454a44519a87745ebb47';let _src;

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
