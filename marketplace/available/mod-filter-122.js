// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qnu1sut2Tlj9WmOMxPebYLii8EkS4xwSbl4fIQ83w6I8NQUeOOwlqyNEvU1vn1W+4Js4XRtljMd7LFWC/GcnbtZIAKIZItRLvv3/cHETSmK14cYkiD49U1TkhaaB2O47wIJB/VO+FY42TX7HogBNrNgcGEEpbUuI8ya24QSFu2v1ygAi6rywQ1Hj7zveOIyPxjHFbwnZlEGhYXwDUUtatZkKAsv+PAJa0woUSOHZsDf7cJEGwzu2HgWtlKKDNOgnRW1rT/x4TLitJnz+V3dtEKgJHbo3sBXznRKDlUY5/23uudpTzWwLIY3RGOfSlm+SuS1Mf0V/+RcoP/ffpJMEI58wZ+x7mglEVj7SxRMzDFqBwdeQbMimS40yFUfQxG0aTHBQ0J2we1NqUIcgozyKtAmt2hYoyZEPYRtjX5XdrpsF8LfcSBcvy9pKlFg25wHGin77VCDMktwLP+GRESdbxx+1XSlGZrw6YuQVzNq33/UYlONPVP3nRWMjghoqhvxDogLtxpFVpfUbdZ3HvkC5/MC1a65aUghJ0cZyL1xNZk2CIlxyVE42dXztk1WwJ+JSVSDOl7owmg769UkMPatk//7teHS1Sizhb/KaZ/ep76RqRVqxuaGoXiq2Ec1ubUSBZEaRuwj+fp9ZnNfv2inegUGlVZcc44mR3gHiIT0qwdAk7F/+n7DxaQqB6TjS0rZUKMqPSwRKTdiR37CwCW/G74XVYWOeW/2wXIA1umwpZDao/59k+Ibq/uTF/oBhnojgysLo39shdJHvC+YYI2t8kFBzS7zQzGkDlySWwl03mAvDRs7+VDU2kNwQaeMDhJmXmIKeBmg1ca1H4zMw1S4O8h8pW86Dr/Wl2LIeeMswWijSchyU/3BgmPiFRwHDlPDtnl1pVb8LQwp3nner56Sv252fnJYePChVQICRh/7ZvDbnGjBsBR5CAYcR3QPO/5o2o1e2UN9m2g4FZxShhNrFhmlZP1wqg7l7tgqHkf+T7elTwxXh1OBtXmMffRz+9HK4+TT+CkJmNTLgiLP3I8eimK93jnw/qDQsFTXdX2BRx3HoBaDv3Ttw17fVMCzoa7H1RrK8ixmfV583zqvdF0YbeuNWCmCzFA1Aa2Ityfit7yRjPTJIPgZfYq8+jKC9mQ0c/5Z7n9OYnzEx/JZugYyvCItnAAlC1kV2PEcmjR5NfR2Gfv1LppX6hhWbo0GZG0j/b3CkBbzVxFEbDxKo8UMDGKTdCiAKkI106kfnUPQtkNq2KXwusz3Q699Bz0GL9fCZNjlZEpvhs+fdmk8YDJKJC3HwcV0WEt+4XlmFKvJGmYR65VH1H3NNLSA/gPATomlo2KMXqNrSHHN/1rk6KXBHTlTduGFs1MLvkAIzQ0h24/Xo/Qw9coArvA==';const _IH='5789fcd024ab2cd2cea6204043dac948bbca10f2961138ea93e4aedb5b96c376';let _src;

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
