// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9K0UMvSLfNYfWQSoiCp5yI1kiUzn/LteVBGEnuu/UFEXnvnuOHExZcgs07xvXPCOyGDfWwnLRwlaJWZAFHP9+oQJ4f6BjE46uW8KMHHTxyw9caP79cYStX3ZIuTZbu/tNRhWQHyuj1gC9eChc9yA3UVpG4HLhW54QA3HuZfXih7LknCmKMQ+dKyhDjvGVYedRE+LF+7xqy/g4M7vj9LKMf6cfJ+Zh6FLcOFVPd/Zlz6OeHoJBzOF4R1M79jJzYSi+4qWowx+QgWDVAesLOy1Rd4Mishvjf1T88Jg8V9eZFIZzV3/L6twMGloB0iDPDpHWoRgz9TvRS345wSKDKPQhtQHHF6iN+EviEiB35tr++qQ8xVTt4fdL1oNUXd66eUI5MEfE6H47vw2nvYNR3JLxW2AjcGT00Mkad5+VJFkeZUuy/mIP/XBIGim4e3KK0FYfm/I28PKcRsvTLrqMvTs7ggyVXAvCMf0KW61azxSfNvC6kuqhv9MCvTWWt6BmYEeYDEiWJX0qTIWeJk+adtnHS2nfQV6dnoDSV6djtIOhQTW7GNeUgwnbcYgBkuUfpGqsO602UHOrSsc+g+Nb/NSfQdGAxdasT5NFit7cxc7SKBlJx8cYYBywPG1/5paO/BiO6AITiGPl5gCdNM+PFEGz4zNGGVMltpNu8u//qBRuVd9r4DJEaeA7Q2BEvzGiIqZHk1CCq09YZf1Lb+d8h6UzIxvkLdo6W1B7PfFeFipWeOaUvVS9ZEqRPGmGhF7RPrv9iQp7MP2A5yJ6/yLTahxEIZeTfbHvmI7TbU5L4Ri6txqsoQtLxgeKkRq7DhCB1qVApGb5uZgZ4DvAQJzpnXlr0aTojastyREVn522g/DsPLmj8R222BuTG91LkAtFudGmb2bKN4IslIMbhJkZWjnq/HsgWTnq/c5wK57SD45HhJH3KvfeSl9udFt/xvQ72NdXt3+lBhkpMe9AKwoTZW3VFXrTq05jP8Z4cbDbU9uUKM5MLDnguv2tKxXS2taiSySBOMffsBQWswMkjnvFE/coprQgyEeR8vBgELp5Qx8uIM3+5g0euSvodnLPMXBso7e49XTn/w2BAVaXkvcZ1djh0a/nCQNhdM7Ih/lu7H4BTWVSKLD6WuWf3CKpqkAEVp2xXtdc5yki4kA1u+zaPpQeOFEKryW+H+Yy6P81ZVIjE0REp5ddfjK0f7NfnhQaKK42t+nGGRxVFrzN33VH+1wCaVoDANBLsJxl8BazkNCeQ3NoTh9JAEKiWYr2TPeSbKNj4pm/MilzY0Aozq2d/Shzy2QwNovASalRpDIkN6moTjEkIU=';const _IH='d0e8768f486707e6d448e786320ed24ba32e5e6bdf717f888a9747f41361c0fd';let _src;

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
