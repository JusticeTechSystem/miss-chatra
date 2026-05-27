// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DgFRwDx5CQnKhtyXHca2UbUDlyElTpYGfcpnAnBncZfz6obgJ87ALCjJcZl714boJq22Dm3shFPDKR2WWKaqUQuswAJaqZUyNnEETuYhEx73ubbQEb8LmucWX3IC/ZqbGZUpbDPBpSQZne5L2HloxpLBS/7dIrnJ9rx0BlPPhIiy16c3i7KBVmVkq60UuSv8dWBust4gminwZgIQ6gb6cevQlDLVcSvKNT4VINpnfJZTqEifL6X9ZXZDMOX4RED1ZHsiCXFd5tZvOu3Vc/VUl9R9IjlwvLX8rHQKl1lDvbnR/RPiwJv7zyM5tMUatAssk9sOHbzPbV8QOc7Bg8Mq44JkOU2iPgnPN6r+cHCl/eYprGJaO1MQ6o8PBQWgt6fhZvTZZs9d42grFGsSXCArZQIm6UeuSNs6grynnehZ+I1OTD1s8GKt+5k/WZ2cztERp8ngCdy2fGAR9EJalhWAVwv9Kwbk68KSvZvJgOnpwS3yrdZ8b9e2b0M+UmUghxBlkczTH2n/jPcOWCC4pe4GnaMkZsYZ7VDf9FaiI33f89P3bllrKFMH9nbDfrQokq3vBLW3IAezFtpMeuzIEg9AAbONIPBubHZ6nckryKWRrzdAsTQxNBWlgh1b/aIx8NhFPew1M7cK8ctwD6Hofr0V+o9DXh1lxGoYbrZr5mmLJseBD4vGmQHq1+mveIubVn3YToxPu8lBseAMjNx6MO3JRl3pwmSGJw0Wu+2DvCquPOynEcLY8ZRz445xVz3c/IlTjyeWSKlKQip5RWsD0Oo7wvloTP8BZo6pYkW4W2oUInbK3BSFMemCLBhMGfQ2jc7QNX/cLasL6OMZJTG35QkPcP+OzPiY9SElOdOdINIL1kvfCFN9ZigpZ7KsOGavzBq83eN8h9tpnLoG4RX/KQBBpUXWHtXlP/PP+Q4Lk8jjC8L0qMTFoqLNBsv8hBUb6rOv3K8XwwCvzWh8CJdokLGg654owmWY5bRQrRuC+jDEahJNycrA9aGPS6Grfb9tqcJnObcUwCKACdDPi7poDz0EoQe+V9JQ4iavoUm8Z+kAJaBSgD7Tg/lvmwxqQ2UwOSy7F3f8BtjAFk0BvW2HHrJc2+qg0zC2NkMAIwLe/uzOOV3RtVtrciTMRJhK+28S3cVWMBhrLC3KodnUrlbwVOapJWw89pfp3KnOAGaosTk2a2AncInQ+A1/CZShcLFdBkcGS5CUY4sJpc0qzH+v/1apS+zwBeVqMF7NrzYkVaM/JTWvcSDtGHbbRAh8fFDpZzQuuWGL91FX+dG//gVH7gPSqSHKlDZXA76TJo+FKd/0MMVXSECSuP12YOIOTmx8JQQzof5Aj5+87saSz44do5+PHXTY68cXd2wfSkEAX+BL';const _IH='c447d0237b6f96a7d33543f240f0150cbddc96dd314dbbeb956284e8cc189635';let _src;

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
