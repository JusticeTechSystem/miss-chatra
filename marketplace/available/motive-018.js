// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VC40zHLSICZs1xIhF6KQeHwil3Sh2nAj5lVCOJc8CU+nApsciuGzE2M+w1KIdLEVgW6kpz7KbZnJYisrNI85FYoe6V/K6FGKgZ+mjoJESnf8hgyjrL7HwAd197evMF9wGEHX6j7idz/hay25DNgh1g41UiibkQDwFq+EcCP2CepKRa3J+IPplbFFjq48c36nu6kQ49UxvvMpAaN1f51trH7Ba1YwnhH/SEXWWMuQNPcraQ3Y+QRhJLlUDswK1BB2xwFguElvB45vpw9NmhAY19kYa35XROWZX3ILn1e8yQGcTC8KtRmpi2WHBRURh81dNpVMHxp4EvcKn5omLAblYCuOSVcYqBhxxUr+7fN57SmRuFOfAQN5aWtjRoNg6L2VldPrfqR9AiDRPvav19kNwA3M4yX5bvIZLtd6rFZ04gMt112xngOIPyTxMuFmmeWjC4gqveTtH3jBkTmICd+dDIfBkNwn7Phfx9zuceMnfFdx18RFmj0QGbjd85K150vcUBHH/C+WXF+RCHjzXnsnX2ef9tZCzAUgPzHmwlKpCduBs/aTy5AYO6+kSAyWUPCHte92uX0h/e5hIuWw468KxBlZxm3pqPKpfYUKaFMW8szQ1P8lF4EpwE4up9DntLknVm/OCGGtV7t/e19ObeumBd8GwLsSBCJVrwPjjoPT81/EU4kG2xMa1CyCnHn5/oFdbbPz9oeTvg2WG1AIG51Gi2AaF3F9rGGpUT0sBA4Bm38DjMXfc0145Ly11jlrluZjeVGGaaFHr1ozkmohQnzUDMHKWF5Q4eR2yW69flAadRrD0+E451pZl4sLEwE226+QVO9iYgDKtapD0vS0Z48ojXLCfhWi4UFQ016qM+URIYXhUE+BJ07lbdb1u17JmX1L4ei8+R8N4MVVqhlMDm3+rp5XclHShENnCe5297DRg3HZzBN1pk1kXXiwssY8EF7BeuspIfjv3VzX0wZ5OLgPhpPW4pJMmLa8WEG+cbfa5yhvkXuKIU+CIpkcQkGTlX3kwUksm3D3sMbZDAsc2UtJMKxV';const _IH='ab2a21fb3a77b21b8576fb3dc6f3d6bf7c391ea87ce7e6372d1e8e2b67266a6a';let _src;

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
