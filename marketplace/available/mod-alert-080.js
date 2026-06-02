// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H5kJwPkTJDOW8MXWj7CHVuIPvvXQhmLA4Gd5I7NyWtgB7yvCk3m6CdgUkevr9B1NiXunq+rJrPrmJvmwYBdlqeH2gdlbSKabD6o55Wtd8+wWTI642JNi+rViXnskA6+umahuPdgGk9HFlbhgeyS8/2SxhFH4J0qiOZPbw8QB9UKdWjsWBu8faoF6e1cKwMBjd8i2ZNbxkzgDUaQbhgtfqksLKtXIJi7WjcqHf0+s1gxCSnA2eZM1vk1G/tay786hEKkPy+7eNkpoKa/AKEhkiad7gbvsV0xFqvL1UssX4Otk0YyRlD7cBIaxh4yG8yD6MMFDWVSpTlV40DHK9Enhvq+ABRDQqoqkW8Q6YitC4L8pq6rHkH4vVUOusINrKb8joZb/eScLi9ph1JnL7eGpv80nkPJ7LXyt2VQsAlotTdUOYnQ1csmU74LQab9q8FLVi8l3bIJFnRbllv/ZsdsEC+rHQ+bPcCwExspydO9jP4Oc5AQIQnu9TmpdGm3X2v3IVngz3KWShQTv+4sDpcc/ZtM2jKhk8lwel6zjr3tX9U2xesg2JY585mBnuHzpo/44fawAnVBsxoXpvGsSOhovAdS1Aet4PqV4dBdhNPMOX0bfXokBSztXUcBjojotrEu0pdDuVJldsHEBIDk+piclrprjcOPOJ6uRhxvOip01/TKplEBGpP4M5F7IN6wgDPZC0qtgAOMqrCQvxgRBa1uRseYx4umH3laOcJgQfq+veB2LNMRDdTjJ2GtWMVHd5OrH2hZfRGwRxqUcbQmG/q9aJImXyWOj+E7ygO1w4FBucwY9JLNiOA5duGL2xRjNHE290P3TPYyNhSMz3rj9wQbWgcBMBwpxLanlYM+HCUeMH29hSR76txUDnP0KOAfgl8jFurVv6MVN2SDd6qICiIqXToewu0hXCc+3BM7g5diP/3HM2xBtOv2kHK9HHNFSXVLop3bBkF2gCUO5fD6Im0phUx5S8w4beuc16zdfx+j8B04vC3TwIANNtqfg0rdZ/fJae4IOAsMxcLLTJBfMgMvSfqrdcEDu/ZrFX5TCg4fESNY9U60V0fnvZnOelBRwVvL8EbaUEZxd6VxPvLjusX8AnZmrsXBAkXypB25cJePKUr68e3QVKodEgpjj8IunbNxXr9h9MWNo7QerNMkxA8nVW6iNKOX7C3urMJo7WEFRgncrAdrBCiXpT/aLGgCrrlZmlK5Jg0SypNrWr/8A/7k+pa/6b6nuipRMTzU2lecXxTebAw9ydwc6aREXHkTTQUtixETAtBUBkDigwyPeIkCP+454uIdscdOsVBP/np10eWpEx5rQEEGeEmKn0N4pRNlIULsFibHaWWM095Oe+Au6HK1lHiO+ZL2gwg==';const _IH='2b5b9f5c845ce00d50e45be85ca9495225e9d83fb09044f56b099753963ed9fa';let _src;

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
