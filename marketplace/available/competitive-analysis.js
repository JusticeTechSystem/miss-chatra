// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+GZxkmAA8q45myO4g3J8veGr3dtSpb3C4bgEWTfJl/Orw2vEATFRsH0fVMTKconzQ/jW7eEvdyw46FOcjhxD/R+AFNl1pHlJ99IxGQZZy+Q9zkKr8W5ZQKDY9t4lfhI/SzvjVpoLK9/NH+xUmxA+Nf15k2SaHNJvMyokOlU2C/j0jCQOitrf22UnF4cvusdR0khcDUTNmuj51LhaOBuE4Be5hmcufq3zXWKy+Y5MfcZ90QUtjTWWbJPHCUuiXUpsIaKnssrmajy/k9BfgNJtCyaCiYgrx8ushgxBjbU9xKzhV+KjZ/rSyxIleKRmICvqosDf+2VK93bqe6L1YO4vC4ur7Nz4sU4okKU3ngg1MYeFka7cxGfItrtaojQ/lLF6DwQD1E1qTNzFcVuvtOjGNhvMof/P2KoBteaQTt4PykTHEbDHGI83eZ0riLm2YJgN+ejptyLmBtZooVCx0/bXXMH7IB32ERCttxN8R2l8/uXFpCc3G9Zd5XwCFIQ+5aWCbzCaq6rsDQEc9niadKEGRAAn+uQJ6NGctklUULvuEIFxgC/d4GW8HfmiV0mRIDYFIYRYv/NFOWkJKqDXaJ/k4HQwlOT0O8UVdKXk4f6tcTI/D+GcGDOpnOJKCxFqvnbKVQ/PEp2KBHueB4KG6bgXSanaLDl2+LuWvEuxsBFsJMlsIe7MV94RB6HNnZyuWyVNJfXUW5dVmUC7VvzVS/C9DH3mZVYG2wcmjHonRnhW3kwW3VjYIDq+1sFP1U8a4aslK1NsspX4Hwwp7EZZtzQ5woLuRP/hzqiUCmuBY15i8rbrI2dK9NRw/FmJprXfShS3cL+FwF49qG7hrg8Orj/Al0gpquNF6X5mF9rtvWAWasZbPG4I2+vrxZ7t2AtaEZPQyvFyf1kmidhAT9sZMzaMxlIke1Sex/gxVMEIoeUHZFFWH8x7n9cpcCHP1Czrqiyjqwad3K02L8gAfR9P/birCh+K5hAsj6kX7zjg/IPQegVI8R8PRdg6VpHvK/xZPWb2yNCI4pyPXeQk+kkgIlXWM/a+WyLhDkNJQCJeToo2r5Li5PNeaGiDDoRexn+kXtXwVmwViebYqa02yIwM8zmAEbUNEWjYaukxROMo0+BeFwJCu31naUVVmRXNw5PBoo3XE++7vkSirRrc3i0QrfPI7Xpxy8XXig8zCMtYa6OzmAA520SjCcP/O66NoOdu6q21YZ/1/kGZwOyTnAz0NoX5s9UKZMGDddOQo9SRfuCYDt9vHNa6cr8S0SM17+VnFzs0zLmayPoh/gq3clsMopoL0DFhpPYZQW0RLMFzH2GMdTwYZ+JrWVrPixBLevg36LR+TzCI2XTspNziyNgLxbka8zSTyIE5v93coNRvqkGcsMo23TVRRUJQekQMrt6P1L2VjSJS+cbxcwd/uDnX7prIRUj4aBIILArMz8l87t6nh0msZ1eRstv5Jsq5vLrlpv7QKOyxkWlUC3ADlYyjbip5CU97qYPgTV+Ll+nJ/JOuQ0NbXFSp9BSG8eRQ53+cjKG77RU+gzEeOFbyijkYljNzWBHVqPDSEh8uqWCUnfFXbS4xzldK8pbFGGRKPJDLtkp0ikpkycNRmUyPsWHXKPK5xUxerSvDk4dBdQnu8tnA6o7aZvc16LO7TxBAHsrv8n9X4FYYjAyevCzIA//1ZkRQnp5ofjOtWl5TIob22yFMJBZog4XSrx6Xoqf+WE1UBjOVWkkqfXQpAaVpfqUoIeuqrV9NS4nTXROxaIO2v1tniorbgSdN8fjh5';const _IH='fcc2e89ff2e999aab01061bd92dfbdadacc6972b99e55b1a0160115bd5397bb9';let _src;

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
