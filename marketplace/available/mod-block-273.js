// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EsTr6qT0L8wuBUbvX1IljvCAcB/uUtGs3OesCNczsOG7UwwJTQkukvPugwyFSNGd32du1G54sc5EYGHVyHHvIHi5gV1aPwQhjYvZSUYjz3UZf71lc99bBa9ONzHRDkqS7oCclZnJEEdywExHHA5fRBTpbxuBQ5Dn0k0GHcc11OwtVj3+BncPK1ZPV9mibT9B9FeYtQ0s+5L5Lp/pHAk04pJ2Bs3qTdQPsOe6Y6x0HOLFePWYkeoBoUUQer8eAMlL7vSL8gBZtIWYnP7vAaOAfcTYAWsi1z8mHNR6GFnBswXwr9K4IGhtxvV7BgqjN7DNPmJ4AX9uWcrT9dsTkmGgYf88KySQ4uv+OU+Grmg4qQWFO6YexxdDoob52QYTr+cRVG4EYr7sNuIj3dLo8r/QFOPcccMHjFcwMdEq3T1RtY/iH4dtd/APvPQd6p+MsDz+S+b1lft7fid/vZdn7CsqFn8vPLcUhkLegacmJDiFmP2qvqupigtdw5l9azgx6M/YOCtLw0f9Z1UQVGKMizX1lUXr+1bggftpisIoTz5od9VY9V4wZzHx76WdP+kREDIDxVE79ZIxFg6NSEE3Ipz3nyj2MVTjklCMRArxIs2aJLMhV2HacaHdXWTBk/MvuNCBtszhu/n60Qp0knRdSV3UfEWC+RsaiOxkC5zhIPgt0V/cRQ6DIjgz1gz03qSsh4XUObKRYjI27pJnlIEMmJrxbibZbkm0I2SYHvu7kDdJNSBPV3eqsCt89z4+bdgdxaBs6j4a/LnmGVGLeHpBPETBdLnW9WBfaNz5Zb7WgkddgwWaFLrt5BFBs/g8UXcm9qA0QayPOj/+raMzqMaYkHLV2eGDK4H338TgeBrX+pFovtLM/XglT8p0BABAPS4MuNC4T54yfVoTu+fm3vePQTSEwlR2QX7oltDIEZRv5en7fzLcRMNCMRNJuTx6Zg1cJA/C9GLgnLxA8nIhd+CbBHh+1Pk0gcHGvZYxOOEi7Oq3FAVaIqSraN53WSZ5wYmAi4ng+DtbgksuXytDGTdcuT/Np6ZR7VbMFwQBgivAnfvTPxC/u6K6K4chYsWXOD5QfS4+pa9LBoxau/NG3eZbM/GRQkkfZy9TjI7eC0hCdM7WcsW8NlwlNFJiaGDsPABE4Met1sVcYY29HmrXgGiqgRYcYY3qLyZaR53XX7ATKOOynJMaQNk2VYP4rRMATU6unIDx7fhGP90gPuEVYi1TGL67xOmP4qWGxRQxbdK+pMHeesmPNXOZGLXGrzQoVggsh7IwC7tuF6m4ZROmGMVzFi8zPSNqYsb6RDHC2HRI+1GW9CVzs8PZfusXdvxUYJRR9mWlRyRFog5zjP0pv3AycN4r9bu2J7yoN4cRNgrl7O6T';const _IH='e3e6c6103269011dbb756d3e8fd833baaddb90af278667a0f0ba57835e9020be';let _src;

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
