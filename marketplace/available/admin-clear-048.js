// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X3A5Xo50pzcoHQYLYCKtSPApJQ1zJkptnv30iGKf8AaDjU3bXK4BMAthpFQOOykqxvTKPVoqFcdkuUNFFxdZoqhAQNx0VJr5gKY/Z433i/KC/hokHqfKfbyTRovyrfkWtwBAHTtWc2Vc2Lh/J92BCXwiS2gsaxUgxQWfPb77u04ifMCkUBfwpc+5h4HKNF+iRTI1RrUj2Ks1TJ/yW41jhku70GsOIh1iEXsi1Vj/99Vs84zff3+IyIJmybbTZBdRQ5MQheOVbyDTLtLVQ6kInRuCrSkiKPssiT/2CdmJr6Sh1hwPXJ5cnptHWDXfeRDNGvaPR+cUsOx6BYnnjrnnNkZb70r/j2w1zM2KQoMXRYM8ASoq13Zbzj5Bf9Sx3YjpsOCrK2IHl4vSq34ZeIeAsgVxSS1bcnnMJrrBeaM8cbUa/8apsHiRiNON9Uhi3zZOmleRb95f1niuP1JkB8bQIO8ZdDChpj56GnbVAQvcTisqCLM3NGrCKJjYcYc1cKYFcDTPfyc7ljf6Lz/lEmQxfJiB0KYHD/4auN/ax7FLjgXoAVzTrwsOrCiW8Qamt1vUh5BIq1yJoCJV0AZ0GMtCPLQhBHm/7l+4N8lFLOdb41TGP77EPbk6QEvi3DJBVoi+tKAC751NmWfaM/SNCwGgC1stJXFAyIH6mY/dBnTJwABxGSalrTQxv7U4rXBd0H9YgCLVxKmKMTv5sqbL5TDyPxsnZF/56sVqJwgTvVZSObNkw2CNoz9yjsEzzJcqEDoRRNG+x2SDmhWOTGfaCQ2WG9R4dyVH1yTyKAzChZ310yoLgS2whQ4Stmd5R9dNAuY6Q2edKrOQlJVSy5RdmIqT9f7BZrZQ1RO1glsu7cznOUYMviYD8DxQpRNmdgCquNRuauZlI8SI7/zwyxxtQqngz8pq5X6lJLypfWYTH3K7qFhcTvuNergjEca/icfW7pdyr4upbvUpZGQLySpc6Tq0kGp/r2Hndp/YDhQT6rTkxYQfhWeg6Bg=';const _IH='ba289db6dcef015548c80d15c5dc1c30aff0290b9a9dce5deae1ec1d7143d179';let _src;

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
