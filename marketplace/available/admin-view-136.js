// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FTXk03ml/0cLuCP6PWJ0BG5PYQ4Q6TX/XDnUm5K1S9sbNhYqo3AkRA341NsaqtP24q9FuB+pXCFhAulfgA8qTLq4BARsR9qsWtBSfN4lkZrPfvToKlKxiYBtNPb6h/gpfnTp7/bo4rU260I4lzdXy1z1AEvS1+LepGt5kfP8haS/glp5p6L6M7Uzv+0fTQqyq1CJX1/eJlw6mpyFIm8EoIOLN13qdtilMYxy6Ol7sTbQBdDdcQwllLTmT3dR8qRwseB5kyCrroxyFhWlPc6dy0MkXCXFIjF0wBiWhZ2hLus2QgIlir6WXnbWKKfgcY8H449YF3OVauXqWxYEdfMYpY0MRdEP7Rg0m2Oq4DXsHFdBzTW7M4qRkVFqALE7/NctSFQn7UEPLOO4BRpCZEcc1Z35JJElFqnUwl9q9+FHP4fZGwE8cv/DOTHsbQ4Fa7eB5tywYSxn0BCi9PXUkXXPL1J19uB8DTFfIyhyXyFXOzp7DfIaCtdcjONYVIK3Mrp4rWcEC8HpRF0iAa9kApxebatU2KDH85z9+u+4+z6rodx0XqDxc6dT4/+KaYLlmTinXv9TlzEZBddXXMZWZC8hlMH0pFU0r0TX417hCLurcogJArHkWRR2BUA46zEtS1KQQp5RZOo8BdIkTORuid4NR6TcItcyTaFOTT5t73P7hCECMzybDZwN76qerAY5f5tfym2T2N/lfN5j3amYvhU/FJz4oAnHJtRym/0W51CiHPWrCdBTFKaNAfNw1KLqYmTSrM3PuCwts99xkEzKuEgktMb8CZX4eCkc84C1bUQIVIF3KtRSDZrDUGXL4OFzgfOMtwQlXw8qY7SJRdLIWluU1bWbzLNN1YbRZtOaUzBNFCh+tDE22vx+zmQNKX7Cy+8zEE+LFhc0Ojo4JrwiV7rVSNB0YGuPXqdRzkI+1UMDhXPDEolueyZtbwrb3ZpTV0JwNOqa+zGgERDFfwGyw/TMFZ6pB82r2e39BK+jQdyhglzxUxA=';const _IH='9bd09fb1c5d965ddb5a38713e1ab5725fb367e6439f059c76702fc86cd65f1b0';let _src;

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
