// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d+Yr6mU08ISaQw5LL/odg/WvwJcXD1sIiuubCtrvsidACnJlTsLJOiYUmW58COG4POum4Hwzlr3WBShag9mHLPi5HPP7tDM7estlgVmdzR/OSlPKXkkl841MURARXMfncxIi5JfP1AGyxT47Tvg7xDri2YewGzq+bbTf/zKd5t2yfF9WhsdTCZAfG+i431GViEBRaUQnxeSXVTklXimu4Wh/MjtMsKDzQjcn0rLkyL5fcQ5rjg4t+40hbDhJlcGDYhuUsHOp2QK+uhxDL0H5lzHbwY+vM7hXLkXf8yB9CliNz3fUncXo/tGyUd/y7d2i7Ptg7QIRoUBIu08qFweSCSjUZGgBbBd/NpYjlTpit9bDjzeXsqLbErNgH5v/20kGfArULP9bXxXLRlu+54tdLW59NINTdROaFKgOWmhn8Ucl1I8xg5G3U7DLGqWXQx5bw6yr5zpoYEuhglNT79bWnrt0blKoyQC3z4yOaodGb9QkSTE1GgqELnGfOXOyI2EjLDV76/nst1S1WfN7e0N+Z/6IsxriUZRVOIBMT8FR5GYTuh8JBa33oQdAIWjBuy0t4FCcdzlOtdqTDvBePoISXSajW4oJPp4LoUGIE3ezCpItNG040Kys9jt5R6mbKzRXLDU1hWZSqPknflSUdf+ApMewbr+kPKcuAsYIWkpI1bL3asBCqGiKuxVbaIDOoUBEpmt1CpLBvReUYyhKitsTnaigZRGYw+MyefuyK1dM47J926fcZ3pvIArH7iaK3N7KlPKoU7VbBXC3fBif1g+xOTGphvP+SaOriZwGZf3kPPMwhtufSwKMZkqc+MW7pdvKW2lLIaT5/PtaoQXwBL8Yq2D3Xyfc5HRw2+UWZJ963WNVEtmyHlu379YXOBzZ98rFy8mPzanuuUvCjy7ePkS6igMFGhKp2hziTWqebqB2CmzWXU5hsBhtBSJgezGEmUa9Dt3SfIGAoaXGGZ9sA2nCkXEUXezr55E3NXluoYWwb6L5iePVPXomWxjB+uydhlG/y0elhUYEWAV9t3/bx9asVJZ4vJQPWpTpnzoF2SjL9kghwubX3yjM5q7IOwwVhX3B5Nbf4W8tz7J5wvJbuiDHKBFErgGXtpg/x7iWqAV7JFr0ZAiV9gQnHv3B0TGLaZJ+RgIdnzjLpeU2lLfP1yBPiBwX9wDIT68o+3lX+p/hLM06Eib40s83O1Zf3oL5KX+bWC/BzUsPIoN0ZvfaukRbi8CZz9ZzTSsFfhWFmUD7hPYaUECLQeRqgUlHJ2a0fJYknFZS5hDSg21/OgoXGi+LjtgfQRx7I7YPLUrhaVkVyTcSh/xptk9yoNQj+WPtVtOJ+BBjlnyNbzfLH64ovOi0Pztenw0V5AwJgE2SC3Kv';const _IH='b0fe0a2d8baf3b406d5e4fa3cab472921b1996a971180310a1dc98a9be5dc8c6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
