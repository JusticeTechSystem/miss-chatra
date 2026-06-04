// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E0wcGlSzQ7V+lC16LX2W9mRjPBv1MobWKWK2A8bRfw0IT6fPAFT5lY4okRBaGSIY0RzgWDX2a2fhCxNweAAYGm2Naj5eFQms86kc0+dfNvNclr4Kcr7n1L5eTnnskIiRayXJ7jDx0NzYpnMfq8Im+8xgUoC8M4JP/AeO/z1luQMoLZSjul5HzcZ4+pwNq1lsO0jW4oW5QP32CkCt95ZIZJLDfYFlNcrwRSqll/9nL51O23rthu3sUGXp+yANGeySOkWRyzMne9pOEddu8pFjfqCqt6yQdpa4yc01rS84fVGniDMf3QdFFKrAKtDilrbduNbAeVBTFw+9J6EXi9ZeusqfpFpVmzJwecuEof0LhJ8/Nd/IjgN7TfBscizMhLcAElr3SLDzAEokVX1oQy7DgxIAtDPypGrLDNZIR9uxX6BYbT0FiLn7cPRknxI109ZHQunp1fCq6r6fhvOCJ57t0j/0YGqaP/VAP0vSdWwAv+kGf2f1hAVqJobFZvHbKea2B/8qRgaGl6UKfhXMlbP/wv1mHhMIlAJnpQ0/Kj6vuhOXY0tQfi4ldaMNMaofmrHP6c93ksUnKf/kN5vONNQo2fiigtNle/eBf8H386HCwc9zgc5IKp83xOh8Gjm4+lYSYAwLJmorf90oF9arO18CG80w3LCFmHev2hjLru8lqkxNiVhxe5ez/KbhBm9DgUuDUHvw9RtIduy0Uri7im9PKDuFAFuqXOxn6MUp7iYy35uG39Q/U6E3HNjY6mGrINlVVB9SgdD6EUfUy5VEEpjnNlNPgmvkLW9WUEOYu2H6stGk6ijnYRhUcr2MEDrp+Z6mLZtRYyy5IlDayahcdtiHCyHzBmCVCtAn3j59Oe5jKoaDc2LxP5HJKbdFBuOyaRVLJKCRMsbVbisFt4BRxDC+3Hl5uyRN4C9NvtxuDtwxp+NFEUmST0y8zAuOSycC8AsWSFJveruwtVYi6AY9Lj9QAkAtSQ05KrHA/M6RbpAiYsMn4KTftVQq1vmO9tfWHPx4FFcJY5yz+3m9dol/J82VquzBOwqajLmnHparsn7PfaCfjy3guV2DZnVbLSTG1f+1+OMpKbkXhUM488gMrPooSLexim2dkpnsa8giv5Q7KAF8JnSBiRlKHMuv5eam7CqbWP+91xLRiacZih1xf/+Oihwz00SraLYry638p2wzFNFCtOww0PCTl2Lcw8XuFzhdgYoCLbGesg==';const _IH='7b9a3b9efc8579abe19926068735bbaabf5d886a6c2566677877bf80a6172d36';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
