// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2Xq1OWsOtFA/cm36LbacYIs6Cbj34Ouq4F83MuSe9eSuqPnhSCCjc4qpUqAmSt7fp6Ed+0MVEpFruvct5i7r2hTp1oEEjRVgBFLm8dcvH/0rzUXmqqabMPMu7KltwTuwCOR+gye5YtggjO9GTBFqElhCfEi99HBWTmod1EF+CNCoJVPM1lFYtd2pY3LLnkgua7p2sSS9yLFIu3Ko1+8HsweHbUU4SLJd7P6wdviGEK1RTw5Ge7Hg3pv9oBQEXs7nqS7x0Qu/cljdnJwSJbL0gGGiRJP8SqviElCkEV+TsztPkZHXxcN9G9TZ39oGw6CbWgbc4avWWW2yDiw2fop/C+H2FfXxHtQ2q5xWOQ113zz9+z+sIycL7Caho0SOmGEjnh380LYwPdv3gwApnlEIkyxM56eQ0TtT+u9bra1Z3Gpdlm59s5ZsCmbM9YxiWwlcGTBHxLnMsaVVg3YUgIYY2E0A+A4kQ+YFZlUaG8GIg3R8By/V0ZeOyGhOM4zdw6ovznw494aAOg6MJK42uJvFqP9hXuwwmP3gf2KYxO1lIjUsZ+aQdbSlMxGMpFf0Al5rPXcEHkTr/3iVCn41Rp0YRumRMHQStuwj9482r9Y0+Eivo4VQtjqwVRJaVJYSeqi7vfN435srxqmQYmmJXDqEWsv8bT4/FO739ORbqKAqGmtXVGjG90QczB41oD/B6YHFNxAdoy8iA9apCqT5fyyGievXCm7vsTeYo3Ka9Eq5WkxN9oJzTKmSTiyPjmyaY2D/x9xEkL5YZzzGn1MrK11XIGvyd/yrsMEG36BPpm6g5UkiiRfeZ4eGw7FrLzxx6KCX/S1IlKAJWC3sjxu8XUvcmqNrbfYDBpCsaqbYlu4r+7ed0Kes4koqoINb3yaUqJnDBpp3q29RYKDtjizhtDnR32JsFBKZxvjsgpL4SbrXux8e8fBcXHS8EVxNsASPHSrdqYF3WHYyVxWAt3IRiM5BE3QQPQUwSAWot08x1uzfxfphotQv51W+ydKRhail0eJSVEtowxhzOaKwXTw2RvaBeZmk0Fk6IePDY2meOwt9cOEvwF6kppf+p8fobCopuyv0d4Tuw2MpqEo8qbs9bEk/rVpjwze0V0xjHhIx2tprGOYdV2aR5U51vnmPRm8KOKEex1mJiczqF7LVbrn9tEKh6aR5exAD0mcR1HTP1P5uGthIByjXjvcmNDZRv7n/vZA==';const _IH='898dce3546d33e60a80feedcf4377328b44a9a1d605966803b5402fce4aa12a5';let _src;

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
