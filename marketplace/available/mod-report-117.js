// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JGqDPLiEG+8Eymt2ArsV9LVXUnyH9kmB2wuiY25w5xUB30KHCybFoAoAEEOogPezghw4Jq20TAHAoBSetgNlaeVGforQ3taLBrzryvECfpX5X5laywkEYIE9ndrGG+koPIawdFJ3KTnThbiNcgEfQ7g4gCSNC9Cdy7XoHJKyVIYC4zQJkOOIli0TF6I0Emk7le9ZeUuK/voo9rBhxlR4G5aqmnEwzcpWvzfcpblQQOKBJrh9rdw0VgozwYKMgfz0bifyhEbxhKyT0KatHB8rdPlPZsiT9bJU16NMhQKfzvpI1dSpBWp/S5OmCbrRlqhWExVa/8c/eHFst8X7PieVOtUoyDnKRVrLYN+2i27o5JCRvdnTNMDe0oEaXjsJx6fx8fElU44txnGbcemItSkbPhYkZ6h1HwHkYakeEVkdnVIIvgpppVmAbLwl0cvqpPx5VKhvHMm9dHBuDHtgkugGWwRwYQTq2l29FNDqKhgZwKc620tddbVShAZehtlvFuC+k4Y5X4E/wG82E8s4eUd1QpV6JuS4tUca2iFcscweoaO9D2cpwPdK4GA8VTzJfvCxdw6OIyBPDCIeLmR+EnDyizkNlbMsaHnyxcWr/Xz5NzeUmwopOtRDPhjAyWSj8BC1GSFztQtOcA62vM+leIA0QbHeO/MFrI+mbhHV/i8PzwEiKJi/Hh41RV4sAcUWDB/fe5IK474/Y0+/Z48lT6iZrxjbGwt6B42/Fzi6mOupXH9eKVnlBvoxVAEyUm+aWOUKIeC8YPZShuUxApY8pnmh3faEDNEGjgfeESXdySOBNE4GJjRX+suqJRgTLksi/Kch1tPQzw6WwHcZG6MuChzKOhcyVUlTd+tjdIE8wboq+hvCxWHNwIpDmqPPUUdaZPG7lWel7Gn8S3Y7HWycarFHp0nGQR2Ed88QN721RY+VvLLOukaywQ3gnaN5gdrQSFE7scUHncJ18WoBI/+tb5DTdaXsLMN/7bBCM0m7EQwWaXA9BBXt2ovZwnpEaPqevJw5cN4qsz2boPeb96Z1+zX6OWpjmJG8s44nAgnurzhcPcl3yW6TMyCHeSReuhNudcIMeEMdB0EqbPcsQOYbhCrQwTEgcHHNuQDgC7U4KvVrK+k6N+kXwfqT0Aa3KmfmgDH49qiIj/Vym284A1NzSdjEC/heGL/C2quAsGVXKWDKasDwsWFWF2jZ6mR2jEv+uxE6Np41w7sWvVqgXm5UdvyF7PUMAA7tvFUad7OoYeqCEV2yKQx4agZxTGEHHPy7hqNdcvN40YJaeRDNUFdJTKWHwBNMDkfzhNgr6dIrSitJ/MhbXNbOHgF//kbgr6xev4zq8sHuZdCQg7EwdjL0tgDrelH/RgVjVwRrxF5FVVxgC87qTXplfewxvQ==';const _IH='c4a3eb90423e30d05a515a6e3d9c22abbfbd8272a02394687451a72978e96401';let _src;

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
