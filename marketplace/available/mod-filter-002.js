// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSKZNMWVwdvKLknCs8pqAqoIn78Xyp2gJEAaMT3OrnomINkApfdwQuPazV58u54Ft1ne0rFVTWNQv4awbCO9hLjqBc9KqRxdZG8Yj3EdHrgZLs2QF1c0MkkXD9bNM/EPO9kv+OKgnhJqZbAMdSGfoV6KXJ/h9TfQZmhSb+hyCe22WkWHF1tN3E7kmLyWxOuPPvXX/1oV6NGtP3vQrni6I0twFmlmz/e8WnKngTdqYaIsCE201GBiD8i2+KldnVnWsOiD+yKFMq0epjF05lWvR9M+VFjr9C54i4hwr25Aa/wvMgt/zNTYF0kDxly4lRBxxgcYurbKV2zNTRHZvOWZLsNwHfYK/jfc1NeM4K32SP9r7ylCFVUJ3VRlah+yYUImfHTiSMZS5+//6vS/R89rZtvSmi6CFs+vCCObPGzn7eARAr4xusyQnGEwRE7A5WISjRN90yZR7cC+IVztEiU4gQkkMUGBRk5idU2dBzrR2DB01jwWAfGJ2+4niCLVEIcr/a2uYZnZoidhQkEChE8cu31TNFY4UH1ni5Jt9JYxJHpjLGCPR3cbzBSz31ZjAKDzTwCONKz59iqAqW2Xrt+TRkv5IQjBF4alz9Y2EhFxdyWpSQyCKlF0uTENt72zXuDMe1vXc/iaEspI+vdex0RCmmMDRqfT4j0Oa0So43Hv0r9HdgdbsLKH+UnvQg6D+duz9ElaMI3Wm50PXspF6UHz6bGy0t3XeQYZGiqlrqvP3IFPCMIXgcXWLeO+ogtPJ00PGtJR6MA7CMKejbxiZBbXBxWR1G8O4Nj2izsRSjyORfGWx0lGM+YY4cJALs3w3Z37W3mGTlx9j4RQ/nG4fIXJPaELFOX/F7FBifcPQltrwKaa+pUGt8C6+Wg1AmW1ujeFi7rWtmYzvRgCSk4Ble/bnOcwRSuUEQBFKe6mdHGTKkoeRaxMMqk9w+fgiVqVCDmzq9VhnpBfjF96DVgGkhzTQMozHKll9kHssaATxEY3kGjJhO+saZ0lyC67EZPv0mTGweztFmZA7ZlJ2mFTPdLy80+s9Mh+RgNzVc6AtSn0jrXP+ykCTz7c3Lrsj55wsAnB/OX7rdsDesAjvt+sWpoZ26/U8fpyTBN7LmoTpQ+/YK+ou6X4flOvKmAk3OUofHkqGFL39sgxwmacPpr8chUNoAVfcP/dsNnBORhnrp1vIbku8PT/uVo198fDmkXZFHVQPLdaapZ/IO75cUZcrUXMQyAQQJh0wkcCiNGJVUrSNkvfNznkCWKeEv6xSGfkQAtfjDS2I5D4vre/66PaRKSI0qRQF90rsUZSVIkghuecBLnMAwJgnCQOo5Tw0S2D/BdnVmgTDdS5Ervksj7E/fRvyy7BBRPXqke2dJBOam9mdI=';const _IH='3aed7d3397b6f2f77aac10cc178edfe0c03dffb55de2ec5cbaec809186da0717';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
