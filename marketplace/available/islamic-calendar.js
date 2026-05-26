// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8JvbW/SZsAhVy1cYKmvmMyovXnwMwIDbmLyniwZFve0KGVLukZOyAcewXrQlzAfOXS4FGVQYRvc4b0J+NzsRzNtZyLVj5GFc8kM9NW9HHfDitTG7J10eAtlFVtMpjWazKIW7IMhuCBgPYEmpeWZGCbdDjdbgJxfcyVQxMF1CQSkYGzZjnjp4SR39uS4igRBFJDvoPJJiHaSZjr/gvYJ0lxR+Y3Nbp/gtB7ulGfcKJE/NkJ57NytLGPfp89oJNs/1FYfV4pg9n4uWP0tRSOWFf8tll9m4Mcw9eWwZJe5v2M5+Vw5NAhz8+C85vCj7bcUnyWmU5fQIfjTtiUMzbETpPsp+sizPIqL8ErpwibA6UQsraoZn0EcMsrMxJ8mhqd6NTkTboQFBEM3PiGUY7TIwBkomtxqYTkKhJy382Tf/xvHa4cxuydSizlOzeyqcNf5DUZ0rCg+AaHblw6kAp82HTOPe4mDKqB9sP3Jf/W+m9a5W6SWNwgqxXIjNSwaCkXjEiRBKWPFdqwpNj5ibbuYkDFQbwdijbo7ZgwNyaBsy5iVbYCg+WP6yp32F0vDJ70tS6YrN/UuhYt4BGKTIyGRjqubsZeBPdHbmhvQXyFqh8n++zjhoBn/DIYH9d9NZ5cJz5sgjjqYlbl9TzHuAVSsihaPylOyYZr6vGaX1/ZqLZMc7sNfz9mm0iBkN4GckzJ2vmrPSjIM52eNhxRQVoDWHUNhWGp5RfAi4S0xVTqlEQ/yThm37zA66LNeXopXrzNBnJNyelsLGEBmISzZJ3MYkmTa8Qg6fOxbZ/Sos4AUEOfAI/YvqpYHP8cxyE4lKSltPX6kEXwjHAkaR+9aULRnxu5dCaKfKB6/YHBXjKdh+BRINc1+hAitOs4hLt3iZ1m5FPQ29VAKSntdyXnqpWFUshbVyRFRUl38BgnKKt7eFJ8aOrvYCMvg19mRBYN2ZSF9ky6AVkdUXfdz828oANPXoUVJLo5G1IW2zkg+aAzdV5gFifS+CFzIycu4krC+8AWr6RTlYLt9kGvlYH8SAs58++VI4Q7KJjCZZY2WlQrm4jl2oIFfDavAi4dtd67rrgPyC9PKlK/wQq8+tAMUIOQLNU+WPt+N02OS4xa9vXxce08F+T088K8TZ7ImeoahuwM1ps4kJzSJp5OV2suy5v38XL/yN8oms66U2AaLxOQ7wSlxa0G+u19zWao0IOTpJNWlMUsAQ5/QnN+zIFd4+MT3C+RoJYfJYifprkCVHrz2I/FfJE/RPbKF1T45O8xkEvO2jp7Nom9Dq2aThyR110vUdB4OGFJOqSM3VJrorxu3TFy5b0GyG0MEKkHL/JPaEjrQd1oIPgqb8cEeSPoP2BBztGGOjmDST1UcFseezaTLX9Qvl/37Q8qt8JOTREyBjyeYb5lzD5lrB/eNRfeHa8ItXl5k8b8HPlCyYyKJo3k3W6oTZDYzadfRFq21RMoCaRomWUCrG4HDQBfYcolgvd0qYMcTHdios';const _IH='ec845f7ae2a2cf360f7b5688a581775314f28e3a1470cbf637482f7a750dbf72';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
