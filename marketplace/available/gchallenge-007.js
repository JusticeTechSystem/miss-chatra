// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSd2lzFf0lnDJv+IPeJpMqFbgb6hxtAOIqTL1MVtxyEl4/jfm9uJsHR2m2C9dVIBRuQe9OUj4dBkAtGSt807kGM2yKF2InW1oAA2z/YT9mZijvgYuiWhNnUok+IrvzLaY0vcvGHNyXKe4PyPdkzP938seftO7It+j/38hdNJpwfX63+mkvdznadW/7WJAM4fu/tQCyTlj2mlwKhgkaCQSclKeWbHGaNzXLVNh19hDihNw/s66MwHj8N/VUT7NTPtKZ60xCZsnLA7GHQdf7ofKy/wxZbPArMA+f5cSDlz/kac/GsfFqqBSExWo6/Xs76rI+ZkSJatxFDXVu9ehbq9ypitt70iKU8XVswtcXfs1ys9Z1hitCmJjy27clvQtrLAwBk+GHkfyVLSD7HasRPxk/1r9iBH86tx0jzDaSG35RrSgW1yZiYiwJfsCrZepuOWj/xbANvI1FLJjrYlbwCnzXsiEvjbdBtf/etNNMtLq1VNv1edzDZJJ+zfrbt3aWZ16yuogQBGNK2XaaNAU1JQXu/DMoAoCL2WWnFXB8B1cOfk4ALx78r+1+jPR8bNEMbjLVgpgOxRKxISe2FAJ4XMRjUgKXByvoEWJH3yPgG8ZvDht0J1Zl6Mu0F+O81t3oc3nBfnopMdQ==';const _IH='37a95b65dc966dee6de0aa05d24447e8787728fc087be71269cb695ea0a9345e';let _src;

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
