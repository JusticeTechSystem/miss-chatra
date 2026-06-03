// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7SZSmoQLXSUcRrx6abb6mNrqs0KhnKXPHGEuHqTfmtFfF6PgGlAGB2Sm0XXkC+OnOGc/iyLYK7ENhYtvfN0503TaGZKDne/4QSUGbOxJrdD2TzmULlwoIF9HUGB5eUoyb2TiC6yDE2jPZgL3FjowpJmi0AyVenCMBg4Z7isMXhR1ISZpsxyr7u9oxJraQhafo1CVTn0Sgl3PCJ593HtkGJ0+EqFYn6jaGvhcOgpRIWG63IzrkHDeHbu70PWsqMA+8YwHLC0gRav+qvvjhksW7ppZbeYs9BOjPg8RlAbw9njp6Edc1ndUKUyd7IZ5WEe8KxPBj0u0YicmmSYVozXrEWrUgLVruhYQYUsOVexvhQTgMkMEPB4Lt6ZsBqDvhtK6C0JybaREqbhU3hRAJfRt5uxIAuymnGAxa0JPFsmMrf2O0QtsFnZEO4hiTssNzXb6HVco8ef7JPqX0jrBNRSbA9yRxLvkn9UMo9I/YIZzBczElT/qdC39dAKXrX73U0AI+WkgMYe4p+4vnz3EjgB+IUc7eD5A5eVEiRTOpHqw375AwwlEhyzFtbqJSCRaOuIAwhkx1fe5ixFPPQLhgqR8O8vwY4sQnyNb8F3JSDMr2rWPEip8cQd91KEbT5BdwTu6s4MYpU+XxZDtjtRZoK5SU0h+rjcOmPjp1mbRY5Rmx5qhFNzVShTpgQU+klTIAZaHL39GczlPXLTBRmQ/AMylIumGFNMADD5reHgGGTuAcO8TZzL28fJOHW9FPuVSSFUU1DdCVFpe9ptfRvTxd24Lb/aESIVwiMVWjqIPNAWaPrdArMiqYFRk8iVf8VnciyHbUYDNyNIv2/ft3RJp/22s6f2QpXKUMF2upkxuIZQjjSABtxIe1LksyE7I/At/6LIE7BUyCDXaK0HpudMbxSvq73U2doAAUBnCYWHhjQyN77YFyEz6DJcEQ5lPjjVFMqq2zPtXShkPjlwDVJu21JcikfrXfPAg0mx3DTDVCPQdqk/FkEi5/IlZ18BOZTWULZY0lcDE6qkLiyq3JjkCTQY15AiwdBSbgaCBNOeDu8lYcnFbF1NoezxXzgDbsGPuzMMnSUOX5revoxc/ci8ZoB+2k7RJ/6SQ34kJkRc6RRoXCOJ5ggThO8Rok1VdK8P0fMnUx0Tp2BOit0tT/WeEF0Z3VmOer9nYtjB5EjPGcKFj1clih55FbFNsrr8u';const _IH='1965f41675de48c905e52172c9f71962603fd72caf9b59654592027eee03406b';let _src;

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
