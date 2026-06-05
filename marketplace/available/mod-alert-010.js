// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y8vslzk01+E5xkO11sIW37dp8VW7AEv+A8C/sWx4V7TYIdcimjxYQMRwX1YzfhYwEoode5jHjVRME9+PZHp0jqAJciigN2nG0MTqcf3cRUMd+Gb9i6rybg9X7dclIxpxcXfjhkPBrEy3vkBTpR68UmjtjLSzSfk/oTonfhpN1OGvL+74E12mFCii8D1d4ZT56i38OwYb9iwo8HnqQPUIKLz+hcMRyyumegaz3WkKmNAnFeFxxeZkM5ecCCO8fBzYknvddP2Jdq08m8UwGf+dExywxgGaitLvyjTL31shuQJ76jPdfT/ruSwqGl+anNY0wQIE5G5IawuLtBg/hm4vlR3IfvhMWEF9SX0CsOuGkaM6E095NxG4NseaNRVoDDMYOfCrp9gS8ta+AdSHAvXle7CXEAweSywXI5GCoFJBNbMCFEEBgd3FIjKPPE82y31LIhuxdHnmXp1lG+7TZd1oiiPgdaQHIzfUyYEa+ck8lOHk7+PXyU9UZu4fOOMR8vWvZkfwmznNsOX7KynwJY+HG5WbocU8PHa42oraJDRtQ57wTO0gGlJWnuJUIAAQR2BuxCSslyk0/HN0Md7mQr5nR9cJpcgBR83BlyFml+OjknhY+nNYOzY1m/rePMNANIhaa+/a7OZ3i9UMnzqixqldAdlch4nlJcGSA9AThUSOSgRTjkaKem9vXA6M1Po44LLzPSkckZrUIUgS4OJANxbvyoi+JRs0eppmljVFBN/nku8IyVp/jcefdUxh09xRH0NMTbIQ+B9SkVNAZP1iQ2G9y9o+t6jvJt/0O0miinEIZtnV1L78ZwBSfSOXRWbpii/QzhSOQaO++Df7FHc+hXGiAizrjmTGUOJyuoqESbfuIUSD5xkBISbDr3s213DLlLrZ6UGWNbKH73i7jr/4uj9nd3/HDsCeQ1cNT6sHKpklJJ8Lzy/qMpZ7DtYUkDGl+VvxUB4Mw/9FcrRR1KVfxM7Eo36vHuCdAgBtI/VqTR3iw9JYuyGugs+ULzv6jtsVGNd4DfqwVDVcFFgJEXtwpWY1pcl4gkie6sxzXK8dsTEJcFWUhYHSQ4BkP9hhQYGdahzlU44tO8zhRRgR/e3gWuO2wiH7liWIGZD57Dp/Q1ovmtI4uhmt3fC6jvGH+OuT0ExO/oP/ZsL5c1l5KFtw9oV3/l3pnN82KaXBaTpPNd3jvLVCU6EuokarI3iON9VriMT1WczxC1nZqKmYwfK/AGRo40o7WU8gcjj6AnXLAguxxEh0cJXVsu0gpRqU51poIpt3CdcNuFtXJEY9hqeq85y5OAHQegIkEea9L30t0fS+cxwHy5f+iK1FmOXVsv2s0Mr8svB4hkr4Mo5J5wp0gmGPlmmm2W4sUvsxCg==';const _IH='efe4eb1128fef56fd01cb69dd4e1bf7b7075877d05e4df88a86d9bd03c1a7b01';let _src;

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
