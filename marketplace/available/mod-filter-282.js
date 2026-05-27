// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oSnwPe6vq5SFhBvB6dWrOQ8ySWvzRHfYAngKjv0vavJfjzLio51/xmLJkELdF4gayV0piVXwO03wKfMxCQ0r4CSCgfCTaZ//eMMT7QWc7YoPmjeSWoSRaGND3zZj0E7JZUkDip7qxShlhkeD6DJ58M3iR4UAZUDNCupJ4j9uIT7LnKqjrsf49yu/71b4wdxqjjcBGA1pk4/z9APV/IBewNiDjCTRZ8F5NGMVA/QM0bGSnpPTQY9VjAHuDKdJ25N3fMUL0WueUkPYfeT+LLBtGoU2b4o9YdmTX0GW7ZEyb7Q7wXMBZWG9u+88C/vFlmGP+aK/+DJDVYBS4vjL1yht5vYfW9vIOupJspTSwbb3BgCx34fJX9OEwS3ao2t0KmpbHxMz+pYPFY+FhFT1JZCDCy6XujTEwXb8wGgV7hcvI2XQzRU3qIEpaeji1j5FMrcEnS5vAW1BgcuE+Op2vFEUWuwGWtS2qN/ePEHUifJun3KehzJy9FDaLNn7BPKWG2zQMBncHk6+bwKomDrhLFLAYFbPQkfyY6EXzf1svXLtTuYatAKGEZQAvohQUBpBLKXUqi4XnCHSv78+PqbOhcFJ96OxFUx9vesGs1aBy57khY4vy/O5b6AKTaRCJmzKwnIja8qmbpk42QTD5WIoaOJmYI+d8AeJgmBSAGfwri8qWNrxG6OBkfBbz7HAjqmMz8TdhsmSJJeGYW0paNxYIEGa3n9OOPn5az+PL+WZT5EiWorVxbxEolY4xPxuAzY3JY59GepLNirTGzW+8hFEQmtjnmkobsGFUD+4YTv6kJPPZ1htaaD7Ul1M22JAdAdV3BCshq/PG9lBCFwp8Sx4KkDbFnZfQhHczkDuNi4KfOjy7VgZTpGPPEBun2V3FHPfZQ5N/7h+bGkQxzeT6K3LLlSf6vUC0REW24CmmmHy0S+pAWiqLZtnOiWB7vUu5Y1PPOX17PYi+lDFfq7wAAbG52HfW8EnonJm+vRg8U0gelX1AMdL3NrjqKP8PPpEm3IwYgkamCHhX5LmPPotZpxMfG7pDxpDBB0hnm3v4Z5gb5f7MrsymnwSKZUJV55w5lfAX0qmHojPMLy7ie+CDclOoP5XZokz5sAsU/CV5wqQ14dYeXfbuZCDWG2irVcCINnzG4e7OFN8u6+8vVPRJkEwb6zh+U5yAQjmo1q9P/tX3A8vwPO7nM7KTWDQ8Jr6V3msUlu0OHyKc/f+T8eal1YUTRRzF+vjVeyYOX32a8RmCVl0AP8MBYKZYS3eCAfq2jKn4VAcW2nbDt4kTGVh/hp8uAHDBm/GtiIp4RKUGtllcp+SY6qRkcf0I+Uo2wKKouJv7hsF9oSR32H6GOcLBmtrXzgB/8xgCHjCdpXwYsQL5nOOTz681UYccnSh4Q==';const _IH='f4e2013050e281a8c27ab203194795424a663f81faa602e62c4c87f75f50db51';let _src;

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
