// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/rhs1kSaru57rUW0kFzeKovrfvcaPgMCJjcNHTWI4uPkgKSF9TdLQbYw/1Zr8djdQUxy2EFMd48KDhi6DTdN7VHIxqMh0IOTpoIBBu76QD9fzVN5T9puET303O6A6/opjfHT7JCJkpk7vKoTU5eKkCTMqFcp9p/pZ149dEssc//OG/g3Fv6DMj0j1RMkCc7gk6uyyLK0K4rzLfWK/GPeQFmwhdILcZlUJA0szkHu9ogMu0ej7QRl1UT8wem29AGv+d6hN0qlGVrY76VncfyUIAu2zgRQu6TbJy5wPeGB/pDaIOdLWTrXUZiKtpEsnFkR2Pgz4MDrmpwXOtidW9XLe7F6sEvIB7BSe90j1HNaaW532pZ+7i79J8arfdW7O5oJLk4nYJFJA3nTW/TRLGaJEoyasCpVLyHTazP5E3aQ6XSwsCN1BqdEbYHSlGs27Ky0A8hIxGh5qp4fNFZSTCm3BeqSP0n0BzgsqZpLP8T9N8n0OS4tz1ZpZ3OKv2w0KzGDnJLMo3k/lFXuQeETmStjRqIK0vmCmRUgJcGIZpP3Yst/nvMWNe8o+tPf5eGwczDoOoDdnOZeki6MK3y3i4OwuJXRlueL7Ud/PgTGorYmM8XRaO8vfy+27SuMgdJFUXFskCy71MPBN7RA2sRhkyxs0t43odpum6vkA7umNsZVkyLXGkNpZoj7BJAfhHeSPcNmkt5H++WqJy/VEeTxgbYywl/DNaRf4K0d4Mx8v95T8QPbjwMomnaG5pNTFSncpLbXyjAf+wiu3O3UqCnbTA6JLGA5B0cgi0YTwlh9Tn/WKCwz/8a009XJWdxOsBJQz4i/EbCaIVjfKMfpUX/HWUrPZz8uDD9YoioOSZPlE9keMyyZYdP6fT/pRBLH4OvGEYMjR6TUWXfHe/1n48oq6jdyExDXQ+n3wSmT0K+4+KhIaWO95WUZiTyVzVS0iFs6NDKyQBScWEE8k8Q34fbjgAC6vyOEgTItGwhGIenwOZepQgWFBCFzayVposkjVR1eNV1LQqI2H+J4f+dzS3vRfBoyUu3KuxasUIDpHCUPJDj6+0EzYgJ1gf5o+xTKurrZzSCz2CRxwcZmoScobQKUAyyLo0xwrKdufbisubEZFqRsXw47csaNyplsCxjBsDmwQiFO5DJz4VZzK+grir/GRL4y5oi6CzuPzL9mDafFr9WGNl3x9PKHFvq6rsCxRQopT2ighcUt/2/p4dC1mUmZnL0DJRhZBVLMcqoRevmoapPS8hbUIasw8ZuGTnRca+y0A/hw9ZDNsN7++/N6YLni5ecrvPfOx+MLP5datrUZRrPyk0KE7dyIc8DIvz7rJbLI/8M9oS7FOfgiLNK9s9k3HIpEeRNtOBqVknmvPTxN1sKUaIbShXcjyrgw/w=';const _IH='605606ad0cdb8d558f86e5301c4dc47908eae94d57012087abb170cdd3c4ca2a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
