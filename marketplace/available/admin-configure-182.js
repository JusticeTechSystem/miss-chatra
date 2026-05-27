// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J5prwwuG/wcqJruQfwgTotx4qjzU8SxLS1V7LptdMU0HvpyhJQzE/l1g3sX2unQmhqRSQSNzkMCV4XPDtWyxPSwS3YRxiHZsctYT5jkFw/a1+ygM24B2j19yA5z+1/VSqMRmf5RCcRBgUftkyZNH2SwL5VKWV4YBKKMdJ7Wg5mmTbjnkj7k7c56LFP/+6edX3zru7ybzgz0ea/APZy/rwZKY8qpiouOp8ueUrmZpNmOpNGuyNsobTmyLPIShP9D3xs1SPSzAQ2BtcUu+ojGU0cAPEhZ8I+7zCxs+CrGBxoAoaVuehNb/zKpqsT/tkhrYVQOE2yWIZ87quJkoiwS6oQoar1G0RnxhDjPYuD8Uiq3/kw2OqOTY73k9oeMJR1UL8FFMRf+elipTpAqTWzSdG0BL19RQ/VpYHrXqqGb89SsFxB0QRwl46iDYCy2pxleOGIMk/+zf6Yzkfox8vDoS/SvsU3EZBuf139OLPl4yFxbqub//1NrslOumhDyixET1EPCHsXga2eVuoIAEXVsQD9aicXUq0EvLstKbB1cAYVKw6XsZNdw0NHtp3hg5GTf3eBPIsU0ysHKkgHTzQM5mOyevnFwVgLRFapWceHJm9o+IGwConXefvDvlR3PikzCcjxeCA3ktTkrck2ln40/ifKGa5o34JFG1/HoDaKH6RlrkHiH0lnGsOCasljDnkz+p2rFtoOFK9KgZjITvDWWyAhptDaCQSUXXbOJwaTUeQH2Qia6j5wZ0+/Tx43n/koCiklHZ0mkxJRrE7wFeS0yme8crGcDjeWpgyOq1I+OYjMVuNJhRmn6lC94Ey+IJlrju1wvuHqW4IXh8Ydh8drYwZFJUcfCDywvN2le22iXMO4vQnO2G2mfd/qZAOMR90BhoXiGYFl/uapUP2+Gqvo+KYwOHnP85OGpOeKQeu8ALWRXxFwIAZfJ+fgaELx5fOojXyef3hYQBNPoEBP8fQ9eg59Yu2Hz/bXy5NM15GFkLXCqwYwo4NaBNdK3+9TINK5BuaVxZsHTUxJSKYyTDQoqs0stf+lk0bQ==';const _IH='3c9e5082ce3b5a27d7c952b6f024327c9d9c5e789d5dc49d7839526ee2f6f64e';let _src;

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
