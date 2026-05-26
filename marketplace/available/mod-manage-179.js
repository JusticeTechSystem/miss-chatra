// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tfp0FMdI5jbn+Wqy2qr4xk55BwW6qJCPEFyP256A33icn9XwauTnrt8n0D2bERGvtlS9erJBnhfjoFB8quR+jzQVLXDuc3/0aPYvV9uU9uQRbHsnv9bBFSADV/smIgWEx5tfOu8NhB+268EWiVL3obJbeiWaQYD40iA5IpTSdAfbJ062NJ3qPj/i7sgHWQxKBgLR/3Po711dgTyTrgLgJEuRastQFBnly7/gR8F9hHmpZwggUe39IGXJx1riQ8IN3b7qHA8P57c2znRDuCiKl1bV4jZEzePZ+IL5VoJvQ1fJt/cH8fSuMHQhsnUwdLo44w6URaXXYcMr0AqCuJFJ/zQAdK5gTzoMYkNe6/PbQBp+BcILj7G9192/9pcYjPzT9ujjKS0iaWHL8Uh4yA5HG+wJbZguO9ETkwIPAZZWbmEOF2CGgFzxqE778yHM9IUYFiSecCp2uQMc06L2Zigrn3jzH0PAQkzwvvJNz54ZViMkxTehHLqR6Tu2lPSTxYZVpY3H4rHLrsTJJ4sgnFOu+c/1juhoXbitR86zuWzqyKBDwRNyM4jVbBXspVqU2JMoRLUek6Jqk/Cn8mkGNwNJ8amcs+7fl7cK4sTAIQ+cKUjCKr+aQ06xj0HDydsincpCNCAK5O89DiMkj8bZCAJ3CqXAmoZi4OFQ4ZRyOBD8FvbEoQvdGduqPayC9jCYccXk8pjuWPBCptsoi69HhC6h/3IKy6uervAYfVBkGjiLDExxAWGNxfZdcv0qPrKOYpZdqpdc1U9F6aXAoun22a8SC9miaPQj8pYM7a+Oo1FEidog1egCSGZARimjNO7rQ/WCY9sdFRaq24TvPgoAH8tR5CtKgw0E5nq8Ls2n+FWQnr9uawAJAo/ME7AsivNHykcna1Sq5c3nlXZS02qMU2PMzkSRd914D63vIXf6dp8PTN/Flp7l1HTT6Q7uBPb4MluC5aHJmyrEEj6MSPxnkjeTh7a506e9UZtVPcntg/eZ/+gToGdsG1Se49G0mgJzGwy1ZSDJWwj7xiSENftHxkzUJRQ6nFhIVgRZZENZ0TAdT71EcWgfkC6xXF9SULuovXEAFmzNR1efYcZDTywY/KGSgmupPDajrBm6CZo2jgoxoq0WmF6JSyfRxMiUq0ZqDmIjJ0sjRXfe+XKHzpST7i5c0taPxqeOHpTcgekuHkIvvu+k4PHC1iVodoGPDCXsq/6w5cuZD77KLBoyY20HpDslHvAAeWdR9JBWLhg5Da+WBaqGNYVzEH9/5w2TDlDcvJfkzqbnYh/QHPKmLcZIPuPv/LDTGUVsTkj1YP4S7HbFuDREhNCpHi+ahUwVk5suzsnI3TYuqXIgCf3MhSq5Qo0ZwgSIDG7CGTyUNEwr/LSe/vb/Lmp9h8UY5g==';const _IH='aac2c62236232f6a617f36ced6aed5c04a11346712a6479497c47450eb6629f8';let _src;

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
