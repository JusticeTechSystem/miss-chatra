// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R3WQKMaEUN7gjA4Im3FNP8+KcTs2KPvoFKoEkKF4wtggtB1EC+Lik4P3dxywLVpBBjZ4evGidkdRqc7iBgQpkQ0oP9ox0OCqGpKveQyzs+GURVpU+H0NM9Nb20+NP2da+M4AdXZxonu81Kxr9o2SAdzagHQbGnYu/XHsK0nM6iPInP09tjLcqsIkCo2Yt4+1mKiUo4s17kmeknOkUHAQCc3/tNnSao1hCTVbwl+s5mqUWcdFevKoi5yFULLK0f9TNmAeWE2k/LKJ8hPdG4Vvc6OmS+al4ekai8aNj5nuPYhYSfPmAkmWvJUU5litqP5C9GWSh06vifK9U8MjMHERWPC+kiHnanKdz/SwhwusxIGzZ29yEzkVmqYDCP2K2kW6eQmviC9D3qcQ02TErTPr54w7z/0R4SG7o/cO2cmRAHk6eU+rQ2i3basw0/Ezzs0HNrsFVmFU6V2V44vHY6rSOrfRf0tq+Dum0SfkETB+Bc6lUKoQVqfyiQMDnv/MJAtt44zOfK/CuWCe0bjyGfmpTarGacNu2B+5DB9JgRxWeh0L2v+80yF+BABJKwBqD+YPpJrsXl9cioS8Nej3c5dI+eF1z8G97gSEKsdPJ4K5sJw2vE5Ip7FbkHtxm4go17R+GBObPOpMBk4LC2uAkUWwtaGSjwo/gILoMZF3ePKTrBrlFRiD5VqFQdwhLNgVqQNL6J9mfZ04JBKIFGUBpn7JdBpkXwPlmIgLWywiIZLi20ga7PP7EH7+PDHfae0CQu6PC5wN0hwJXzjvleeW7YAjgCNFedZ+Tn98H+GGc/+L0sO6A092NYEBfm6nM4qBpxzI4OJNWAU3CyBbowGWjZSHO30lcAWRtSA9aZBTAdfqqx5MgnOYu9SrlesInvICtINEdTxawkOHSPWCHcyhZzf3MGoRxm3xpudI44PPAP1wLqf/DZllmR5ii07kpdwuxCRFkXVSDg4ZfJ1YRFrxx/URSvg0FFnBHNs/H/+Lsi+NKDfKFUgrPkVDmO43F2yp4XNW5Po7nGuxGl54n/un8qltaFUbjrMAhFEfdONzbYZUNehKdIxVcAOLy8Q4Lk9mT6fd1LCJz3i2CrbUz89EJ3MfIfcUP+YXUqvgw+VEGfAj8tj56BAXS2+xL52Iyqam9tqDiCuQxg8+WP49K0XhofQ92i13Cw13yFywZ+QiYy3C5X/nD7ZaQD6QTkAfE9sEIOCbTNqw9Zz1DBDEyqzYVlzru/y4ppcln7WnyIqUPOZ7PCk1AlOwrw6kuz4rPD/rWjtZITKCj6nhuGgIeNAOQUmemI0R0EB70h7DNbDWZbl9K8yGp2M3p/8wfqnGDUC5qgBoSrWKUPFFB81xl/eKV1EhBS77xWh1AwSyBA==';const _IH='0e00d6c9815ae323b9f3de148e76b55a4770293633a8303c255dc00513f73295';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
