// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EzpvljfWYB88zmac59pOuLr3NZwWgqrhFKci3v+fAe0ptfAKknfOEn7gWNmOqbrp6yDHuzZ4S9I6qfVz3Y5HlMkG5lC/7Vj5Gj2c1uYt+tE2lbZQwHGT+7zSDTHRf3BF1YKgXt9lLCQsiu1WNwF4mviSNeyJmH77vUtg6MBlR9WU24dq1b5zWNb9q1iKjEnzre2hVba5GDdisrdT0cwegKPbIbCo3k11+8ywoPnGzuDUEcuYA3ynEEYqHyHYHvEDVHu7Y0bCz66rrG+KBQJj5cTdOCyeWZDejmICIIFkDjVuVz+YHiTzb/1wYNYDpjKBqLdswLYN//zqeqSo41GaPGS0ptI4QSTx5xhOeP66CbGfaLJcBUbvkaJBIQXm5PMDASJVZmYc2qW6a7iP9cAP8OytVgExCGgWO7YUwno0TFajNStD/mXhxx7ElCpkJZl5z+st/8xUZVace5iI2dBREIrrQH4ZE091DG6SfP8ILV83Ubmmn1xmzIjQI3esoCb7ZiTtxnPzBfBII3oeHuIoSx3oITaTYTkGjwKj/IK/8Rm1EC5d1bLiXZRoUCxb1lYoG2YfqpfF1CLU9Tl5QEGrHkh7bna9egA5Fyni37Z+8TXMW8GJsjtL2AGI5zuet36d7Pff3dOSN1PHcF+r/M9ScCRa7WVy++yQZXaN9jo/y0N4gA9tPFJF4Bmjg0uQ4orPbNpBK+4Ac2tSTMyZsMMUBA5SNbthOw1dfZERxHEa6dB7iYnwHYuckAkZhy+0p6507t8HZ20zzAsf0tqEGe824pC5+1t7QV4BcTN7hosZRPUfEgAeS8bOsVfQ4mr3Gg1Qp0d/y2UMfa5TnxWFb9tIxVx0tIrtJPwQq815wSTOei3xaEnNKQ1JeRUtzaXGixJ31I3ICBAcjPknlPjwfToaRkqE7kOMSWrhjY5d7KnBTwSeMhC+Q2hUD5tJbU+kyc4p7vTbA/T/tpT/8MMHR76rIvulwZuhdbD9zOTnZl8S2yizR5OTR4RQnOCcrlFURItoBsyyqvQHXmHX12eCkQ9TN+VCHxdq09Ciadhxg8MKIMm+ZotFU9z7bEdn5cYKjieIc1Ocw2nQk1Ni6lt4CAJ49eJAlDCpFzmo0VoUyjKu2emkAUxzdknt8W5ulVl+P5RGEfxinxKhCDAwbSaiouW4DjPgwfFaoiuItb6kiBnoHGHGcBp+w5ooXeRLpfpEHfCItpVbYSQYcD/1cytV/JBgZHh0vUswHoEcgHAKsJcTHM+FCzcCL3WTdrO3JW3Vgn7Sohxri7h1PLP173gKBPqSetlgIp2uIcAtleyULmaTg2AqkIrMV9VbkkPPAgfUP68bsXnT+gAQxMnGuRKCNDWpW0t92LvF/302Q9W+iYIDOnMaJ+FIC7hQfw==';const _IH='cd3a4e7f2d66e9c63d7cee352790c2bfa4fa2f1d69fa11d1997290bef2bdf1f1';let _src;

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
