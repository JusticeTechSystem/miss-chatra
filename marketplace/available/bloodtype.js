// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+yMgGcILZDl/VoeP3IjWUZLaehpnJO9CfNZQzbLSAj8lYtS5Yh5chtXIxCTIV93DptaOcHAL4Lw4htxV73hRNpJisgyI2FkNvZu+1lhyInouS7hbsCuCbPoCHdd8/gpB6YdTFjR6+jM/yGXjtmqoUqf6iBEFNjyQePpVpg4MX5ASrUoB/TFrDFDFMcZgwURefOJReTp9gK9dkv65BbB9KDcfttZkPFc36QtgFEHTA4Hz3gtWqqjKHD4j38mhg+oZVLrKct9OQDF4w4K8W7OY2R/P7RGXyQeqKmZvE7h4zlJC3DykvliHTen/NqrcGGyqyIObgJbi66TgOSOmJm6VBkzyL+vFA1r4H+dR+HKSIeBR2fmgXtGuIpAYfkKbHmsfDWmvXTJI5USYqltCTp2tk3k/O6ytDqCaI/ronVEIyC0mLC07tAIU1+pCsLt7aHPSeRC4kf5P1DDdzoMCM8jYaSbsaTV+zdj8IPBquR8dov+PNeJbmn/wfeqSka/Xt1w6OSTiCy9qR9VuAg2OdcIwWFRpGnzW0FIfv38W3zyAOHgYSLDMAbwt9ACp+12qRlJ7K5aK3zEhJXlghw3pg5uYC144eR5JRwBQ5i45uK8Cu2FWAXhA/RvZ9jtRYPd+DPwxbnmTh5mc3ELWCUSN5IPyZ7/fvP77ZJ14SEJ1ibhKiLIMNI2u832d1TUdcUKEExkScwpxEffG8fZ5t9OYToPc428YxGb5Nlpq6pRtCXpxygokKmo+/2VTE0haoBC4TgvW2TXSfECAIEpTbyUwRQ1WIB0RxLhtQlfu9iLp965xchk4/1Irwk69YAg2MwHVuIQoXOJS76a5T0mQ48Dq0+/0h6pTNp8PdAotcaRbLPO+7eZ4DedN7Ou5Zaub0u2yQtMUm4KZ6s9DHOi/pQT2dmSLnRzb0bOZ5ChOcFDUZVpmBhHgI9DIG7AuPXu5G3/PTStTXVR2n2Bx47bvmKn2ofSRTX67XyO3Yo5m/QQd0Gn52n3HdI9SxtOJcL4y2sudYIrrXGt3ob87hF70PlnFwJezGElPsMU5ktAEzwXaiscUZQ5bSIkUJv+5JCKXDa9NkylidwkGISBs5UFkQYFKFQnmy6ky+yj1EqjL/2ly8c1aYBAy2RyyLRzYnW/FEEq1CezFAsJlFISYcOxQP7NiBPSjOeGd+stGpqn/s+1hiVz8AfnbheVxl/xErdG/TdcAMEIZspleHvA==';const _IH='f343dc314451fd3b85d983f43253c55d302786634e677bf57077e53cf44edf68';let _src;

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
