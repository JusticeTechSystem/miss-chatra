// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2tx/sIKhziuihpy9d5IC9/ZxgQjOSoEDb8CN9+lVr0gdnWnJAl4SK8tk1jacqXi4t4YdIHkh+CLPW5dJs/H38WkVFr6Ib1bNnL4HK+7Rdhrop6hq3KCNscpRF25FbB0rWEHhYSMWjjgUaoItODpSiviwbaLu461mLtSFrKteM7w1j1IY0FDX1aDkAlBNlqJKIUk13zlpk3Ktc05fZNYLfV9ecZ7bKWcy3eG6YtuAaKX60pGuHWoiy8peHAxvv+NPgA6TXWtJnmZa7KI+dzA4zg3BPbpTdEdhvFyW/IHP7hK0doGSCNklKhu9HF4nXnAi/HDpYTuiJHKx00iZKlzFAg1Ag0qSTZr8OgdhwD221HWnHsO1C+bhftygtWz3tCmR+1FUCU5zXLn9UlOEzhKSePkdBBdnNVLFHUl+j9EuCZUMViLXjHCoWlk3JTqRGTRBY2jk+sNjJ5BPMaETHm9KAQhnNA6ExJmnK0UL3PUdu++YMvPxh+YKZTB9YPer3YeNm92hkgkFrMBiXnP6euuLnPeUFj/hqeCqphAy+ntWeaYqDGqnil1aaOUyIX2i5OiuLYc1NvqgNe9KgwHpjVeHsLtBPFPEXiT8G4Lv/NalDrBnzV6134pOJg8rIdiy4uCG2Ce0V03c1p02trV5huQSQQFBpDetkPWCV42NTTlwep52KW0Eah+7sRhFgC+s/UMT73e9SjYK+faCJAKWr+O81rwGVLSVIXt/sqOhzgubA56ZhNwfUrGSWENk+AMNgXAGeMlL2jKoK1yez3c3KPxZWLGYOFAMnVzpJ6E8XkjOeRYrkZwNlJZKvXyJ2aVDzu4Xf4baspjyTVo0/t739887eZ83UuRlSdWnWg6MTO2yzXfMz2ZqZvzYQ17IbFASiZwnY7KfUAYQ1EGg3wMCu9K97dlKtPdy/7YRfjeRY5itZEe/2AvOrwAffFk4CUJy+kt3CyiuzaTw/WC3OURat4/OaFMTbcTwLPbfM4oBP2VYCo2FIcTsaovlKOX4vpfg7qeNXo9yrb871k+iBNb5C+hnttipQXHXrqXwqPmbKj+xOh/2CDQhESUW2mvGT8N4oCbFcwfdCOxGCYDZGs/Hkgz3Q+8xkd9Lw36MWghfXNo2r6rBxiL2xHMOFE9xpEb+m6rgVXDTdMwYth48EuayhE6Q3frgb6/4YYFLLWfKOmyDxl21KjEMCvao3mJVilGtemprm5b9QQdYx4HI+AqCWJK8q4JYFqxnRkMi6QiR9pfE+fU5QyjnhZ+YjaoF6mC4EFMzqajXPntMcKybF8KmTha0ofuVweuLR1AXnXmDgpoRDahjtZt448oO0JJ4+TOtiuGudUZqyyRH6my/Cm+VzjEhS7zE+eUUpvY/zZrE9gw2k/ng8eIFBEhYC';const _IH='7f9d506dc839682a89d2ec0320dea18e618c5aa0c337410f64de5610246dd5c0';let _src;

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
