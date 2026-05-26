// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/HFek7dzTd7EDy14Ie0nmHD16NstPI/1Bvazx1+MdiHynnsPX/zb6jH99jyHboRznMTq/+LfUUXxBt0wekxjfsvk85peacsVgjbeugywunaJRsdTIG5ZyvKn9BfUW5f8myRYJr0ampA5WmFKzc8oJICOzzT3pnKiF0luqHOUlYnqxz+R9ZY8bxBI/FsHYpH/66pYicZdHTKhwMdqP33b04es2GFJi6J5v08DEzKfSkwrwUJKW2bxc54az6/xdqV6hhKSw2ZKRpolAe0RU6Zp5ktF4JrTpLfAn9N1nBMJYAHcj9BwUTbL5g/dmWQmtV0SjjOg0cyeehnsJk8+axlSLFFgZLaX5PCewjuDHnUEYgdSCs+F6t7UIMfrlrNKgCifHwMollKCklh6HiLbmJPskn9UmMHqYR1TnccMLQFHkQbVdU2JXQrqQEcGi3Isph3F/IvNsTLDKEIlcou+QqJ1RJYToMWoa0wTCBsAgITLM6KXCsideq/MFpqToiOx7YltqATd60ymkf24xJUr/VHHR/8L+nyEPnfrKIb5SXQbo1ArOSC/kpoS9oMB2jR2dAgBX5QHhDFZkaKlUuNCZaU/RvLa7LPe5hUCOM5TXbxB53Sd7/T+cKi3bJM2tjHilHeewv51y8h5HsvPilYQArWm324XnxltlvxQqObY86qRcLsu2VVcvxZ014E/cqfNu8E4T9XzHHpAqlFBc9kxgobl53E80LJPZztriEaXyfmdONm31CU=';const _IH='1af397082536e5f967c36a98913dd07361e85a0b54c9b07eb502e736c8c5d2fb';let _src;

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
