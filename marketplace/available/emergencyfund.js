// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFFysGdV0+ExvUqDR15hoKfINxIhaNRBatp2duCAicWpdcIu+XjUg068mTN5wkVwkfhpWZXQiG8OBm5iDTCBQ1lPD30FbRl2udIaCWDNRaRJCzDLmpQ7GJqF7hbBj4HJZqItEahZJ1ce9+y1ROD/Hmi8br5/zvHlb6AhSwkAR3slOnUP0kvqSSiC8UU2WBgbpwMhT3G8HY6gmE8MaMlDct+VBaH3ss/GlpxmhM/o53jOf45rjnZsn/j/75YqQ5jGdcE1Jsm+M8Mqfhxsi1gYxmzyhVqjucDmmSmt0rswnrKYo8tr1G+9g+DHuCz7VgJ5y+VcE0pmzpDzO+Bl+ERX7xVo3VwcJZkz1LNUpb8UrV525AR+BOqMigIDKwf/nuf1/rWejAElDmME0NKrhY8bL5NQi5uUprs0NKmAtaq1oHFnqOV2Hbpkte0CeNvEzN325dRA0kV9sPtzin0T6ktdLhq8fm/vjxS4xuvyQB9vnLrcGI1oJKVYKGN53MCP1mJbYB9fmN4OJzJLDsH5HbJuBktm4MjBiPUaWHrzABu9+w54VPyflu3t+Ib1E63afuu0l3Xjae22zPI3cGakf94WhTvi5elAGctEM3xv0ahSAPdWBA4UFlv3mjx5Bpb6o5b3UIhz84y7M5F+Zza9fPl3qCwQAx8kyoIgoCITSGMSSA46RCBsOyg0mPLO8YZaNR9kdwMPzCxaMUH1/P/RZ75HDJXelnQy5DmyYNo3cYY9c5xYdtef2LSIQxcSGbnKIVPLAuBNR7BV/bKtGDzalb1RvAWR3+L698PHp4GpNr5nCAxKl2TDUefa3BlgwcKdaLBylGAPtMRwpjJntvPdrawZs5RIGhKQ6JEO6CS0kFK1V9TYgvrSXkXPurx7PoPvYTR++P1QopNSgMINlyPE4tzO/dOr6wl7W95XPbsgl+yexCIylMDM+U6IryTltdRui5uhBdgl2yfCr+P4yTtM+hBpo4xYwQVb/srMZBMAB/dcB2TmoxcpLcCrAHcoHt9H9fm+TIw/N8QP64j7e9ETnpXYY+0nOy4vPwWXkrYk+BRT3Yb1GaSz9B+h7oui4IJ7gcJ09v6RnyIyzLFSgrGXUlyznY905wze5STkH4MNHzmQOUHrGRffkh8CYrN7hdTwbKd+UoDqc1VbVRdZ00ozV9LfoOSNejzOAGMX/q4u4cuk50gPg/gS6Fi7icem7DsOrBazERGhHS';const _IH='76521b4d799f6bea452f3eec9bb72fab4ac4da894e247057952d84b4dd8777f5';let _src;

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
