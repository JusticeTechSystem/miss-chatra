// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0HpHxRZr5kcXK/9OwFhvwrdfpwJc+a/t5v9KKToGfnlkytyOkM5yGJirx7nyFPfA0UlefJ2z39FOo2s/fuu3JqwscAuqBwNDmAllIpAk0SmqraZkTb6fDH95Eo5tZ9wbJ5rAg0BP/eiT6jMMtgqLHtuVI1c8TS2WLTKDoX/hlM+j4aSr2ODkEoLguTm4OYpaZHKBy6sy8CEg8x5x9llNNisn0Taogcqq1qC8K/dSrsK2lhd61wuGuG8cHmqhbTZlK6A7gKBgxq2PrtZiMo87gxMbOoemNR88phMKXt0IephEwUTTL/mAzbmhORaDGuEYYc9+0szAWTTdnQJdtc9FopwszBwdRx0MjnUHo/1kX/+85upFtZFXOE1WDGimhc4+W8ezPIRayQJlEAv9LxTshBjrDbwK56jQLmgCgrIjva1an1yGINyfpPaFKUedbOscB4rZS8Z7Mt0VgJuh/dv24GOScg5tPWhNKdaSUIMYbQ2Ujh/nqR1RlBf6fHW4B8T2+cMC4AVq1lTFoKfd+y5mR8ZfISa0POy6OqUnmo4b5pJuJ3chatmWAsM264wbzhlnNzEzsrmTKKZXcP05WGe0xDSswoEHUZaIuI7SiyXTUzMknEEle6/hN0gSI9nZDbeZR/j5YEOqtfrBNX7tocSJ6/qJ9VgljskzjdUx4vxrEYyQIVhv7AQDsIeKzBi6YtZG4Li1IS8dtL4ObB6S84PVEA4exSptXFLIYOGwUiwt/qa6/c74n7Sw3E2I9xrHdfEKhcnIa1q4Qt2UaYxn4CffOGKEUcFvsEbm1hQkNOq7ZNkUeArp7vfZnjqFb6bTH2DCA+sQhqF7DDrtMaTRds8kNMxe15DDLNIMclhtPXFhI/zFdxZrsjPIIwjoGOFfYoywZ6IF4YBLbz8hmHLRU8XU0Vx07M7Q5BPrMVi9V9bYxIsKXu8ziKjVDAzD0BWbumWujh1vRzj7TonUtkrH+/aQXTE2cb1QL2sGgYL7sr217hDAEAP/JPaQYbEJr7B3/A0GC5l51xjY3hFNIDdCRI7a0R16sX7H9EMZt8FfZXNRWLy4bA1/xVQgS3VEhWQmhfga+P9KZnCcMPSZF99fd0pEiG3JMS7QBg7B8idtrmaaowdubmMfewhoELX92YD7yptsya2w+xpgnt/LaFQ1WTMGtwYYGr5zdqzMIKPaM5W1wqa9z1377a/8QxpWpdm4DZ3bpc6OBRue6VmtsTLJA5dLl2iKIxIEoVGQdXr/9SMzS7h+2S3hiYrVmjZTOa6VXb0A+9DduQjZcdJSD2tDFAGc6b2C7jqrYFsZXtX/RZheEuINyFhHUMgUfr3g6Vrd8ItJhr3ZZrRf4RfeIP6jGVMRJ4bWHSY2xGgcRZCfjmaHh3drw3msR4fxbkFJf1bZM6Hck3J1ugMjYvHIsuo9WNP3mUbgJBQ5ltvcFTo4u4KDOKkmO61CVSIU7w==';const _IH='bf506df5fad01a8ceab3886f041eb58320b8cb98be85a434a9c8d841f86a03d4';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
