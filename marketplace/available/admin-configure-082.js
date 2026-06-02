// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ssD4y8Q9JqABxiSbizp/ncPLerKCNsCVO5yMb9bQKUuK27/B/Srn8iYguz8xWioP4Hn5Uq5PZjJmy+9zdu8RCyC98hG0n/+e+0rNaCveNC0hiIwiB/vGWrwBUeSq8Rl7onmmKOpggCI2IZ7eeO+NuOjLwzVvcH04fJx6HdxxzWteqZiJUSYiTPWkx4UtJazS9Ugjuivwic/pXB4Gfzc0hIQpETF30cvCqE3aOZoSLisGWPP59J/jOYZjovV3yi/3vo02H9CqGBokGGtzGwuJglNiwbo/VKa68CgpTuqKbXTXEwEOfRdRqANWIAVOBSvedMY/OAZktKznPTrtq+hz5eHIo+9TTmxtOXWfSzrEAnn6ryIhN0V4b4ou+HmtSr6/eOenkLTF1b5/fIczdMnbC/ofInvtuPx96wrfoNi4M5DfZCNMMADHuOO7F/witeORQyvzHAtFcG4BKp7P9u3EvEH6aKrRo9ytj+cXq/7BFsFSxghfAPEaN22NvLSImS8pgGLSoDwrsGPWr2sRQWWgI7CD2/zDKijGl9p6P3Ux3ySKzTNLqN6RncOFJ878yb670/7QfKHCDXZriGSdQoB+uz1EKcq/GqakVmOOe58733QfgOQaW0yhjMa420C1j4uEB40HcCMf9SVW3bBLlJvzB3dsx7E1GRIpg9tlJeHqRc5eS9isdqjZQWsFU2XCch2OIX3ZKkyeIOIAwS8XufjvMSLBTJqz4tWArHYWeMJTqc/T4zZuDXCszhW94jsccVFcuCD6T1HqVPp6jVhdbHcpvWD6G5ozLHA/JvlpsTQkHUjKv+5Pf6SbAipmcWEFKureyVf3ZsUEXt3eiBH3STMO4xNywEUAGj2/V3A6Q9AQjtljnkJ38P+ZuMlCsplEgr8x/xuJopUCiPcwP+szLNACqEl3g1LOQ8bheJGwXW1vOsjzurIj9x4/DzdMs12p4SWLe1QrKuzF+bma3c89ZU6rdBjY/JlUJHmjQNPN/FsIFn0Crf3JkTKaQZ/u64Mt1WSY+pHZNSa+pMvVfb/sHtuwVEij';const _IH='ce56ad5b90ef54743c13f92dd4f7e65591c1cd621d2d316984c3b68e120f5d03';let _src;

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
