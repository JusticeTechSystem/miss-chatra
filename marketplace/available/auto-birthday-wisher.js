// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWAg1hIgQDBqEIPqBEqIu/Q99tAC4jtSpX7AKwB6NhO2ZTXcpyQjiKSH8XtyZnjzOLWzJ7VjMbjIZ49iND7TqyHv3G1firvDaS0R/YpFPGAZ1FsFuqL51QjH/6qbgqPMiCjpPc4ikPw33UkWN2Of2WhgZ4+A/snl9hRzvF80gbM+ErmHSDsgXEnX1/2BZd9/e5nCc1XRp3ufmRrZxtB68QuuJu2fAnARo6AWlX9ZXyZTHdJh4VcnRl2K+xPO7bhaKNoOooele6l3P8aWnLLurRaXtjqk4nfkUb5T86UloMQ5jRgrnTMvjRRXD7uGqaHl5ShAOgg+r5k4EDWYWh1d5yX20dOycCbDbKYiYqyfMSbmcU4SmiyWTF0rJcAPGikzxP6SBY7/AXXzI8BUdnaRgeyvNz6jygHkmdBDK2vNziFAml+8mCDRIrcbV2iuHcczk/msy0NlXd1p6yQXpqb6wnELKRvnenLFLQ0Qnrl664rLlslByliFH05SwLdBf3xHsw4chstqmQWVs54lz+jVW8GuQHQw/ed1xyZPq6KWhKM7MUPfsUXNOhL9/sOwbNFo4oe8P448x8WwwmMAOkxNl3kz9WnMLhvC2++i+1JjvjD5sdXaM4kWYeISiD5w0lAhoiAwDoIVM4/r5etRCzfVhujDbQBJFowGmWxsoI2dKMVShsS4IKeGDzTH5BPBQFV3dC/gDwfvWO/OojjLwe/CyPJdG4/1OQ54ekbOY6WUsGx1BvPuyTFBKqe/fe5KFiv4X6s+oLBgcfM8Ifbth3v2IBETn1SmGvXYWMURIvdXbqL8u6QZL4UDQM6vJNyRvhEtCddC9vlxikt/YyEZPPY42j+LERvI9OaxH38tnwyeSF8B9xJgGX1QoIdBq0SZU+aRZcephj0oINr9QAs1qhzX4BkUixqGwIb0qrfTGE530IxTfFLFgC9zC9hcARtW/CspBeWw5Bc6r/ZPXm2fk8LjjzOqTduUThfsZcQpq+Ysmk5q4qz9upkmi6bCte7xIRD0t7AlvZP7E6Gwfgs4ONqI5NkSYjO+VwA1FpNryPfvacXUOEx/CI0rNyYVz7VYZQe5PR+7bkQSBsw7AyeioD91H1NeqXBuDut4vhijlettvLHMZ72+RSRQJX9JxqPVOY5aJGUPNDeHITxJG4mCY9tJTpSP8GLCOG+CjoYwyHCYkldFNdYUEtPIPxpDzMD5671f2aimQ28JfAkNAAHtNSmPzwdzstdHkqa1JX5ZJY6YDdmpzLmBnGepO+T93gCwktOUZuFnJHNvfowpxXP6EXHrANEbbCk5gsG/CjW1JLu1kkS56GTbFZVqwOdlbWOTAXgmS6PfCmubOudZkX2fOsWTdzEn/dM+Elb4IVNr9SViQ3f2f5exXQpyoykXFklII67n48LNlEI9ELyOczsv5MdneAG30scrGUGs0Yud1AagXTK9J+Vo3aFtwViT8vMu35AOfXrD++o3/1r0jicqflJg77wPvaVaddWkTpnwrv6grSx4nCEcvvoS3e80OVjALxVdNmVj0cVROKWqc+4zdYmfJGSk42OleeFw9vUvJXtcgCOaSMuFEQXlYjNBdbsKFo5Se0DuQQds2fFsfqrBfjxUS63aMC0CvDgTVCxizk/lxpjd163ZFrFf8VHqOHywDmDMRR7VVYijdD0TPoU480A/Fl/rSFfuruYOKRHTVQuZqbG15sY8JkXZm+80dYV6ZMA7tsnqDYMCxAkmFyXQ0IQIZLO3rVRHI=';const _IH='bb32d9aa33ecbefbd36a2eb913c7685745df77624df7398e737fcd6575f10443';let _src;

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
