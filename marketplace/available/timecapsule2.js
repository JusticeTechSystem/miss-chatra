// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j39GLxuHm2QrZemFsxxzSxZQvQLO4iG8ywC5CyKAeIwiu/5uB5tRfZg4GbMm+3iHLoNAqpWQaCoLnJbmzoqnwX+EmR32gyUt+E/VGydQ8CXB6UW3nWZE0ROW+EcDUG2q6nvZZ2eufHb25PSJy7AsWr+ERP4t4HTnhJiJwkMBg8qVMFWMY1uIBAGYrZARc8AMst3nH6WstAalKz37MUVvfkJrqquhXNdIqipd68m8KE4HiI7EzoNQpCO8heJmc5rmWrUTy4KR0wqbP1UPsPrjkPYp0VKF7AcfMc4+Nmg4JQ2pBwHdrvHfMhlEVXclLoRuOipSI6FhY7zvf8PqmkA7CC/st5joqnQEMjjw4FoooTCWaeRVF/5MLRCjIim/QlPFuLTkck1aFcfUEWTcI35jaBZ5pVokQnVBmZb+G3bno9yytHMScsbGsv4syYFWlrGQG111G8rpP4AoGf8G95YilFsLbnfInFyG6ZN9hCAENb7V1j8D0+J9Blk+N/MTQzzm6uXfVA5cwNzvZM0tKYKkuE97AYoxApZQ5PhSTStO1HrUB4swpxmBlcMgiwufVr/7dAXPcYRpfbhwjxn7NhT6ajPSoAhPqfrLFb4iOXE4W7yCGYmNEHbA4PNYtkunQ2THJxlQJ6UodvuqRH1OBliEj/e5uFvw+JTp4oH+5Q+bFtyaphZSLqvFo2g2FwXL47leiwckzO1gYkAWUx19G1iggKz9bE9KZG1CpUEs2jiPkKUAWqXv5TDGIoB6ZPEzP3SEcJRGp34HxJED4xR6VI2/+rgO0MdM/CobvwTT0kFCONYhkDPspnJ6MO6R8wCpDHS/bg+o1v90ZgaFfNlQ7LgClN/CsTllIlsx9NXwgxiPpt6MHpXi2hYJqlElX2xnhTnLBPQ8YUo1WcKXV3XHAnGtwYf+BYJH07WyyXZd9zYIpJKxE6fDOa+RCn2pkkcXtpTlWbwbYGT8xznss4tIpYudRC7s2F9tMdB1qUWBlVP4SO0PUEKe36Fhr98IvU8E8kLxAb2J1x617eyq7bvOnz+qeBz6y2WBn1M/cgHd13TVEzDadTyN1IUptmZdbfaPeUI65TlZ7ri2m3G6VJFnKFsxn5wSgmll4lBFsoMnIe3nXLpV1jkeBHZd3es7bO+CluwvICHClAbQY7zn7kYOHiRIRss9DNo8/QTn7hBjOgfQCRezeN/jmWrKR2pELUbbnQO2WhSA3MFd0MdZ';const _IH='adebd016523f374a36634fe04d1b1cd57281c1d039c54e7d92edadcebc09b71e';let _src;

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
