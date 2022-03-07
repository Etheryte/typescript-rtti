import ts from 'typescript';
import { literalNode } from './literal-node';
import { serialize } from './serialize';

/*
const __RΦ = { 
    m: (k, v) => (t, ...a) => t && Reflect.metadata ? Reflect.metadata(k, v)(t, ...a) : void 0, 
    f: (f, d, n) => (d.forEach(d => d(f)), Object.defineProperty(f, "name", { value: n, writable: false }), f), 
    r: (o, a) => (Object.assign(o, a)), 
    a: id => {
            let t = __RΦ.t[id];
            if (t.RΦ) {
                let r = t.RΦ;
                delete t.RΦ;
                __RΦ.r(t, r(t));
            }
            else if (t.LΦ) {
                let l = t.LΦ();
                delete t.LΦ;
                __RΦ.t[id] = t = l;
            }
            return t;
    }
}
 */

export function rtStore(typeMap : Map<number,ts.Expression>) {
  const factory = ts.factory;

  let typeEntries = Array.from(typeMap.entries()).map(([i, t]) => factory.createPropertyAssignment(
    factory.createComputedPropertyName(ts.factory.createNumericLiteral(i)), 
    t
  ));
  let typeStore = factory.createObjectLiteralExpression(typeEntries);

  // -----------------------

  return factory.createVariableStatement(
    undefined,
    factory.createVariableDeclarationList(
      [factory.createVariableDeclaration(
        factory.createIdentifier("__RΦ"),
        undefined,
        undefined,
        serialize({
          m: literalNode(factory.createArrowFunction(
            undefined,
            undefined,
            [
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("k"),
                undefined,
                undefined,
                undefined
              ),
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("v"),
                undefined,
                undefined,
                undefined
              )
            ],
            undefined,
            factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            factory.createArrowFunction(
              undefined,
              undefined,
              [
                factory.createParameterDeclaration(
                  undefined,
                  undefined,
                  undefined,
                  factory.createIdentifier("t"),
                  undefined,
                  undefined,
                  undefined
                ),
                factory.createParameterDeclaration(
                  undefined,
                  undefined,
                  factory.createToken(ts.SyntaxKind.DotDotDotToken),
                  factory.createIdentifier("a"),
                  undefined,
                  undefined,
                  undefined
                )
              ],
              undefined,
              factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
              factory.createConditionalExpression(
                factory.createBinaryExpression(
                  factory.createIdentifier("t"),
                  factory.createToken(ts.SyntaxKind.AmpersandAmpersandToken),
                  factory.createPropertyAccessExpression(
                    factory.createIdentifier("Reflect"),
                    factory.createIdentifier("metadata")
                  )
                ),
                factory.createToken(ts.SyntaxKind.QuestionToken),
                factory.createCallExpression(
                  factory.createCallExpression(
                    factory.createPropertyAccessExpression(
                      factory.createIdentifier("Reflect"),
                      factory.createIdentifier("metadata")
                    ),
                    undefined,
                    [
                      factory.createIdentifier("k"),
                      factory.createIdentifier("v")
                    ]
                  ),
                  undefined,
                  [
                    factory.createIdentifier("t"),
                    factory.createSpreadElement(factory.createIdentifier("a"))
                  ]
                ),
                factory.createToken(ts.SyntaxKind.ColonToken),
                factory.createVoidExpression(factory.createNumericLiteral("0"))
              )
            )
          )),
          f: literalNode(factory.createArrowFunction(
            undefined,
            undefined,
            [
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("f"),
                undefined,
                undefined,
                undefined
              ),
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("d"),
                undefined,
                undefined,
                undefined
              ),
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("n"),
                undefined,
                undefined,
                undefined
              )
            ],
            undefined,
            factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            factory.createParenthesizedExpression(factory.createBinaryExpression(
              factory.createBinaryExpression(
                factory.createCallExpression(
                  factory.createPropertyAccessExpression(
                    factory.createIdentifier("d"),
                    factory.createIdentifier("forEach")
                  ),
                  undefined,
                  [factory.createArrowFunction(
                    undefined,
                    undefined,
                    [factory.createParameterDeclaration(
                      undefined,
                      undefined,
                      undefined,
                      factory.createIdentifier("d"),
                      undefined,
                      undefined,
                      undefined
                    )],
                    undefined,
                    factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                    factory.createCallExpression(
                      factory.createIdentifier("d"),
                      undefined,
                      [factory.createIdentifier("f")]
                    )
                  )]
                ),
                factory.createToken(ts.SyntaxKind.CommaToken),
                factory.createCallExpression(
                  factory.createPropertyAccessExpression(
                    factory.createIdentifier("Object"),
                    factory.createIdentifier("defineProperty")
                  ),
                  undefined,
                  [
                    factory.createIdentifier("f"),
                    factory.createStringLiteral("name"),
                    factory.createObjectLiteralExpression(
                      [
                        factory.createPropertyAssignment(
                          factory.createIdentifier("value"),
                          factory.createIdentifier("n")
                        ),
                        factory.createPropertyAssignment(
                          factory.createIdentifier("writable"),
                          factory.createFalse()
                        )
                      ],
                      false
                    )
                  ]
                )
              ),
              factory.createToken(ts.SyntaxKind.CommaToken),
              factory.createIdentifier("f")
            ))
          )),
          c: literalNode(factory.createArrowFunction(
            undefined,
            undefined,
            [
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("c"),
                undefined,
                undefined,
                undefined
              ),
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("d"),
                undefined,
                undefined,
                undefined
              ),
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("dp"),
                undefined,
                undefined,
                undefined
              ),
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("dsp"),
                undefined,
                undefined,
                undefined
              ),
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("n"),
                undefined,
                undefined,
                undefined
              )
            ],
            undefined,
            factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            factory.createParenthesizedExpression(factory.createBinaryExpression(
              factory.createBinaryExpression(
                factory.createBinaryExpression(
                  factory.createBinaryExpression(
                    factory.createCallExpression(
                      factory.createPropertyAccessExpression(
                        factory.createIdentifier("d"),
                        factory.createIdentifier("forEach")
                      ),
                      undefined,
                      [factory.createArrowFunction(
                        undefined,
                        undefined,
                        [factory.createParameterDeclaration(
                          undefined,
                          undefined,
                          undefined,
                          factory.createIdentifier("d"),
                          undefined,
                          undefined,
                          undefined
                        )],
                        undefined,
                        factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                        factory.createCallExpression(
                          factory.createIdentifier("d"),
                          undefined,
                          [factory.createIdentifier("c")]
                        )
                      )]
                    ),
                    factory.createToken(ts.SyntaxKind.CommaToken),
                    factory.createCallExpression(
                      factory.createPropertyAccessExpression(
                        factory.createIdentifier("dp"),
                        factory.createIdentifier("forEach")
                      ),
                      undefined,
                      [factory.createArrowFunction(
                        undefined,
                        undefined,
                        [factory.createParameterDeclaration(
                          undefined,
                          undefined,
                          undefined,
                          factory.createArrayBindingPattern([
                            factory.createBindingElement(
                              undefined,
                              undefined,
                              factory.createIdentifier("p"),
                              undefined
                            ),
                            factory.createBindingElement(
                              undefined,
                              undefined,
                              factory.createIdentifier("d"),
                              undefined
                            )
                          ]),
                          undefined,
                          undefined,
                          undefined
                        )],
                        undefined,
                        factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                        factory.createCallExpression(
                          factory.createIdentifier("d"),
                          undefined,
                          [
                            factory.createPropertyAccessExpression(
                              factory.createIdentifier("c"),
                              factory.createIdentifier("prototype")
                            ),
                            factory.createIdentifier("p")
                          ]
                        )
                      )]
                    )
                  ),
                  factory.createToken(ts.SyntaxKind.CommaToken),
                  factory.createCallExpression(
                    factory.createPropertyAccessExpression(
                      factory.createIdentifier("dsp"),
                      factory.createIdentifier("forEach")
                    ),
                    undefined,
                    [factory.createArrowFunction(
                      undefined,
                      undefined,
                      [factory.createParameterDeclaration(
                        undefined,
                        undefined,
                        undefined,
                        factory.createArrayBindingPattern([
                          factory.createBindingElement(
                            undefined,
                            undefined,
                            factory.createIdentifier("p"),
                            undefined
                          ),
                          factory.createBindingElement(
                            undefined,
                            undefined,
                            factory.createIdentifier("d"),
                            undefined
                          )
                        ]),
                        undefined,
                        undefined,
                        undefined
                      )],
                      undefined,
                      factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                      factory.createCallExpression(
                        factory.createIdentifier("d"),
                        undefined,
                        [
                          factory.createIdentifier("c"),
                          factory.createIdentifier("p")
                        ]
                      )
                    )]
                  )
                ),
                factory.createToken(ts.SyntaxKind.CommaToken),
                factory.createCallExpression(
                  factory.createPropertyAccessExpression(
                    factory.createIdentifier("Object"),
                    factory.createIdentifier("defineProperty")
                  ),
                  undefined,
                  [
                    factory.createIdentifier("c"),
                    factory.createStringLiteral("name"),
                    factory.createObjectLiteralExpression(
                      [
                        factory.createPropertyAssignment(
                          factory.createIdentifier("value"),
                          factory.createIdentifier("n")
                        ),
                        factory.createPropertyAssignment(
                          factory.createIdentifier("writable"),
                          factory.createFalse()
                        )
                      ],
                      false
                    )
                  ]
                )
              ),
              factory.createToken(ts.SyntaxKind.CommaToken),
              factory.createIdentifier("c")
            ))
          )),
          r: literalNode(factory.createArrowFunction(
            undefined,
            undefined,
            [
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("o"),
                undefined,
                undefined,
                undefined
              ),
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                factory.createIdentifier("a"),
                undefined,
                undefined,
                undefined
              )
            ],
            undefined,
            factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            factory.createParenthesizedExpression(factory.createCallExpression(
              factory.createPropertyAccessExpression(
                factory.createIdentifier("Object"),
                factory.createIdentifier("assign")
              ),
              undefined,
              [
                factory.createIdentifier("o"),
                factory.createIdentifier("a")
              ]
            ))
          )),
          a: literalNode(factory.createArrowFunction(
            undefined,
            undefined,
            [factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              factory.createIdentifier("id"),
              undefined,
              undefined,
              undefined
            )],
            undefined,
            factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            factory.createBlock(
              [
                factory.createVariableStatement(
                  undefined,
                  factory.createVariableDeclarationList(
                    [factory.createVariableDeclaration(
                      factory.createIdentifier("t"),
                      undefined,
                      undefined,
                      factory.createElementAccessExpression(
                        factory.createPropertyAccessExpression(
                          factory.createIdentifier("__RΦ"),
                          factory.createIdentifier("t")
                        ),
                        factory.createIdentifier("id")
                      )
                    )],
                    ts.NodeFlags.Let
                  )
                ),
                factory.createIfStatement(
                  factory.createPropertyAccessExpression(
                    factory.createIdentifier("t"),
                    factory.createIdentifier("RΦ")
                  ),
                  factory.createBlock(
                    [
                      factory.createVariableStatement(
                        undefined,
                        factory.createVariableDeclarationList(
                          [factory.createVariableDeclaration(
                            factory.createIdentifier("r"),
                            undefined,
                            undefined,
                            factory.createPropertyAccessExpression(
                              factory.createIdentifier("t"),
                              factory.createIdentifier("RΦ")
                            )
                          )],
                          ts.NodeFlags.Let
                        )
                      ),
                      factory.createExpressionStatement(factory.createDeleteExpression(factory.createPropertyAccessExpression(
                        factory.createIdentifier("t"),
                        factory.createIdentifier("RΦ")
                      ))),
                      factory.createExpressionStatement(factory.createCallExpression(
                        factory.createPropertyAccessExpression(
                          factory.createIdentifier("__RΦ"),
                          factory.createIdentifier("r")
                        ),
                        undefined,
                        [
                          factory.createIdentifier("t"),
                          factory.createCallExpression(
                            factory.createIdentifier("r"),
                            undefined,
                            [factory.createIdentifier("t")]
                          )
                        ]
                      ))
                    ],
                    true
                  ),
                  factory.createIfStatement(
                    factory.createPropertyAccessExpression(
                      factory.createIdentifier("t"),
                      factory.createIdentifier("LΦ")
                    ),
                    factory.createBlock(
                      [
                        factory.createVariableStatement(
                          undefined,
                          factory.createVariableDeclarationList(
                            [factory.createVariableDeclaration(
                              factory.createIdentifier("l"),
                              undefined,
                              undefined,
                              factory.createCallExpression(
                                factory.createPropertyAccessExpression(
                                  factory.createIdentifier("t"),
                                  factory.createIdentifier("LΦ")
                                ),
                                undefined,
                                []
                              )
                            )],
                            ts.NodeFlags.Let
                          )
                        ),
                        factory.createExpressionStatement(factory.createDeleteExpression(factory.createPropertyAccessExpression(
                          factory.createIdentifier("t"),
                          factory.createIdentifier("LΦ")
                        ))),
                        factory.createExpressionStatement(factory.createBinaryExpression(
                          factory.createElementAccessExpression(
                            factory.createPropertyAccessExpression(
                              factory.createIdentifier("__RΦ"),
                              factory.createIdentifier("t")
                            ),
                            factory.createIdentifier("id")
                          ),
                          factory.createToken(ts.SyntaxKind.EqualsToken),
                          factory.createBinaryExpression(
                            factory.createIdentifier("t"),
                            factory.createToken(ts.SyntaxKind.EqualsToken),
                            factory.createIdentifier("l")
                          )
                        ))
                      ],
                      true
                    ),
                    undefined
                  )
                ),
                factory.createReturnStatement(factory.createIdentifier("t"))
              ],
              true
            )
          )),
          t: literalNode(typeStore)
        })
      )],
      ts.NodeFlags.Const
    )
  )
}