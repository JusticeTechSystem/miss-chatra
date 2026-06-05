// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DNzPz0+pJA0PWmO0gTxamkb18YZEkWt2hF4vhqWrrYLEiB0umeYEaYP4HtbYB2DXheQiYlEWrvLmLXgknTmTaqn1BR97mQMbrfoEphU/0CbH5a/QLUNfo25RgVdjasZ5odOCjXss/2j6h/K0Q9YY6+3S7FHLjSyy5E9/zsJM9m3OEmzQZ1yL63HwrXEkOs5Q0a+Hl+v1G92qnZOC5SfWFfDxjKCVz5wHap1O+gH8b9BxmQwxHlSybEcnIPIpqTsgb69VMvPn4S2c8hzeKNSttyzR7w8uZKpa4tJgsV9naeN31Ah81pqEcYIIJlt0SDkFaN+opJk5yQPAM48k5rRrSSh96wTaczQsZnrNyGHy2b+OUUFs/jMLJ5J49M6u04k2pmcgSCdhyDDOdfF7YZQEwrT/kiBmRoRLXeRMsUm6tB5yzbrF41S+2sdj7r+3lSGmmAHGiPpNi4idRIS2cPcPmHxLjxrP69L9yq+LAfrMaOqTkNpym+7HUtIvNrvs2+dno9DCQcKmiOQBWPGSX62q0UYbWiZXdBYCG4nVksGwt7RliHgodr15xOJl1xQ+vQ1kr+2WBGdK0951N6c9L4nyMYQ0v3MVBVcI6DW2JOfkBVpvd6l6SLFk/Uv9bw77cCBrOwu6m52DrxDIpiiT7H08WUjiJ1Ff6ArYwPonsHfW/+3l53ByKvyxNYTDZsxf68bCy1Lei8PnQKHFJOpkfTNpixk5cyJzO6YQaYN3W5x6g8mQHI8ScamP6/m2w6YVb04G2b6P+E1LUdTXeVwQL07gyc6gt6O2LU3Vxes1BkQ18WOAJ+CZQEVAykUeEqu5V8X2lM3Z3H3IvBo/vqPxt0v5ZVTUNFQnZaQl8jJQwmyV2sn2ngcQUJrwBpgDl7Y9+4/uE4K+XJfL3lUBTv8kcOO6xmcU78C2zqFPnmwPO8z1Rvqk5PfJatBecuT0D1ySHKijzoyPFudNQDVMRWo/JC4McWblpjTxytkyXFJD4Hn6LQ==';const _IH='805f4aaf0a347e1b744f44ec006f065dc83f9bf853c2717ef9ab5a39100dc1e1';let _src;

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
