
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model contacts
 * 
 */
export type contacts = $Result.DefaultSelection<Prisma.$contactsPayload>
/**
 * Model leads
 * 
 */
export type leads = $Result.DefaultSelection<Prisma.$leadsPayload>
/**
 * Model restaurant_contacts
 * 
 */
export type restaurant_contacts = $Result.DefaultSelection<Prisma.$restaurant_contactsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contacts
 * const contacts = await prisma.contacts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contacts
   * const contacts = await prisma.contacts.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contacts`: Exposes CRUD operations for the **contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contacts.findMany()
    * ```
    */
  get contacts(): Prisma.contactsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leads`: Exposes CRUD operations for the **leads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.leads.findMany()
    * ```
    */
  get leads(): Prisma.leadsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurant_contacts`: Exposes CRUD operations for the **restaurant_contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurant_contacts
    * const restaurant_contacts = await prisma.restaurant_contacts.findMany()
    * ```
    */
  get restaurant_contacts(): Prisma.restaurant_contactsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    contacts: 'contacts',
    leads: 'leads',
    restaurant_contacts: 'restaurant_contacts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contacts" | "leads" | "restaurant_contacts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      contacts: {
        payload: Prisma.$contactsPayload<ExtArgs>
        fields: Prisma.contactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          findFirst: {
            args: Prisma.contactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          findMany: {
            args: Prisma.contactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>[]
          }
          create: {
            args: Prisma.contactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          createMany: {
            args: Prisma.contactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>[]
          }
          delete: {
            args: Prisma.contactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          update: {
            args: Prisma.contactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          deleteMany: {
            args: Prisma.contactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contactsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>[]
          }
          upsert: {
            args: Prisma.contactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactsPayload>
          }
          aggregate: {
            args: Prisma.ContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacts>
          }
          groupBy: {
            args: Prisma.contactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactsCountAggregateOutputType> | number
          }
        }
      }
      leads: {
        payload: Prisma.$leadsPayload<ExtArgs>
        fields: Prisma.leadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findFirst: {
            args: Prisma.leadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findMany: {
            args: Prisma.leadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          create: {
            args: Prisma.leadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          createMany: {
            args: Prisma.leadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leadsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          delete: {
            args: Prisma.leadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          update: {
            args: Prisma.leadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          deleteMany: {
            args: Prisma.leadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leadsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          upsert: {
            args: Prisma.leadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          aggregate: {
            args: Prisma.LeadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeads>
          }
          groupBy: {
            args: Prisma.leadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.leadsCountArgs<ExtArgs>
            result: $Utils.Optional<LeadsCountAggregateOutputType> | number
          }
        }
      }
      restaurant_contacts: {
        payload: Prisma.$restaurant_contactsPayload<ExtArgs>
        fields: Prisma.restaurant_contactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.restaurant_contactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurant_contactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.restaurant_contactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurant_contactsPayload>
          }
          findFirst: {
            args: Prisma.restaurant_contactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurant_contactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.restaurant_contactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurant_contactsPayload>
          }
          findMany: {
            args: Prisma.restaurant_contactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurant_contactsPayload>[]
          }
          create: {
            args: Prisma.restaurant_contactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurant_contactsPayload>
          }
          createMany: {
            args: Prisma.restaurant_contactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.restaurant_contactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurant_contactsPayload>[]
          }
          delete: {
            args: Prisma.restaurant_contactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurant_contactsPayload>
          }
          update: {
            args: Prisma.restaurant_contactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurant_contactsPayload>
          }
          deleteMany: {
            args: Prisma.restaurant_contactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.restaurant_contactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.restaurant_contactsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurant_contactsPayload>[]
          }
          upsert: {
            args: Prisma.restaurant_contactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurant_contactsPayload>
          }
          aggregate: {
            args: Prisma.Restaurant_contactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant_contacts>
          }
          groupBy: {
            args: Prisma.restaurant_contactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Restaurant_contactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.restaurant_contactsCountArgs<ExtArgs>
            result: $Utils.Optional<Restaurant_contactsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    contacts?: contactsOmit
    leads?: leadsOmit
    restaurant_contacts?: restaurant_contactsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model contacts
   */

  export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  export type ContactsAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactsSumAggregateOutputType = {
    id: number | null
  }

  export type ContactsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    mobile: string | null
    business_type: string | null
    website_name: string | null
    created_at: Date | null
  }

  export type ContactsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    mobile: string | null
    business_type: string | null
    website_name: string | null
    created_at: Date | null
  }

  export type ContactsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    mobile: number
    business_type: number
    website_name: number
    created_at: number
    _all: number
  }


  export type ContactsAvgAggregateInputType = {
    id?: true
  }

  export type ContactsSumAggregateInputType = {
    id?: true
  }

  export type ContactsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    mobile?: true
    business_type?: true
    website_name?: true
    created_at?: true
  }

  export type ContactsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    mobile?: true
    business_type?: true
    website_name?: true
    created_at?: true
  }

  export type ContactsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    mobile?: true
    business_type?: true
    website_name?: true
    created_at?: true
    _all?: true
  }

  export type ContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacts to aggregate.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactsOrderByWithRelationInput | contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contacts
    **/
    _count?: true | ContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMaxAggregateInputType
  }

  export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacts[P]>
      : GetScalarType<T[P], AggregateContacts[P]>
  }




  export type contactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactsWhereInput
    orderBy?: contactsOrderByWithAggregationInput | contactsOrderByWithAggregationInput[]
    by: ContactsScalarFieldEnum[] | ContactsScalarFieldEnum
    having?: contactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsCountAggregateInputType | true
    _avg?: ContactsAvgAggregateInputType
    _sum?: ContactsSumAggregateInputType
    _min?: ContactsMinAggregateInputType
    _max?: ContactsMaxAggregateInputType
  }

  export type ContactsGroupByOutputType = {
    id: number
    name: string
    email: string
    mobile: string
    business_type: string
    website_name: string
    created_at: Date | null
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  type GetContactsGroupByPayload<T extends contactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsGroupByOutputType[P]>
        }
      >
    >


  export type contactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    mobile?: boolean
    business_type?: boolean
    website_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["contacts"]>

  export type contactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    mobile?: boolean
    business_type?: boolean
    website_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["contacts"]>

  export type contactsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    mobile?: boolean
    business_type?: boolean
    website_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["contacts"]>

  export type contactsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    mobile?: boolean
    business_type?: boolean
    website_name?: boolean
    created_at?: boolean
  }

  export type contactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "mobile" | "business_type" | "website_name" | "created_at", ExtArgs["result"]["contacts"]>

  export type $contactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contacts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      mobile: string
      business_type: string
      website_name: string
      created_at: Date | null
    }, ExtArgs["result"]["contacts"]>
    composites: {}
  }

  type contactsGetPayload<S extends boolean | null | undefined | contactsDefaultArgs> = $Result.GetResult<Prisma.$contactsPayload, S>

  type contactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactsCountAggregateInputType | true
    }

  export interface contactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contacts'], meta: { name: 'contacts' } }
    /**
     * Find zero or one Contacts that matches the filter.
     * @param {contactsFindUniqueArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contactsFindUniqueArgs>(args: SelectSubset<T, contactsFindUniqueArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contactsFindUniqueOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contactsFindUniqueOrThrowArgs>(args: SelectSubset<T, contactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsFindFirstArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contactsFindFirstArgs>(args?: SelectSubset<T, contactsFindFirstArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsFindFirstOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contactsFindFirstOrThrowArgs>(args?: SelectSubset<T, contactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contacts.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactsWithIdOnly = await prisma.contacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contactsFindManyArgs>(args?: SelectSubset<T, contactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacts.
     * @param {contactsCreateArgs} args - Arguments to create a Contacts.
     * @example
     * // Create one Contacts
     * const Contacts = await prisma.contacts.create({
     *   data: {
     *     // ... data to create a Contacts
     *   }
     * })
     * 
     */
    create<T extends contactsCreateArgs>(args: SelectSubset<T, contactsCreateArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {contactsCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contactsCreateManyArgs>(args?: SelectSubset<T, contactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {contactsCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactsWithIdOnly = await prisma.contacts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contactsCreateManyAndReturnArgs>(args?: SelectSubset<T, contactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contacts.
     * @param {contactsDeleteArgs} args - Arguments to delete one Contacts.
     * @example
     * // Delete one Contacts
     * const Contacts = await prisma.contacts.delete({
     *   where: {
     *     // ... filter to delete one Contacts
     *   }
     * })
     * 
     */
    delete<T extends contactsDeleteArgs>(args: SelectSubset<T, contactsDeleteArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacts.
     * @param {contactsUpdateArgs} args - Arguments to update one Contacts.
     * @example
     * // Update one Contacts
     * const contacts = await prisma.contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contactsUpdateArgs>(args: SelectSubset<T, contactsUpdateArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {contactsDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contactsDeleteManyArgs>(args?: SelectSubset<T, contactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contactsUpdateManyArgs>(args: SelectSubset<T, contactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {contactsUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactsWithIdOnly = await prisma.contacts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends contactsUpdateManyAndReturnArgs>(args: SelectSubset<T, contactsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contacts.
     * @param {contactsUpsertArgs} args - Arguments to update or create a Contacts.
     * @example
     * // Update or create a Contacts
     * const contacts = await prisma.contacts.upsert({
     *   create: {
     *     // ... data to create a Contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacts we want to update
     *   }
     * })
     */
    upsert<T extends contactsUpsertArgs>(args: SelectSubset<T, contactsUpsertArgs<ExtArgs>>): Prisma__contactsClient<$Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contacts.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends contactsCountArgs>(
      args?: Subset<T, contactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactsAggregateArgs>(args: Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>

    /**
     * Group by Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactsGroupByArgs['orderBy'] }
        : { orderBy?: contactsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contacts model
   */
  readonly fields: contactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contacts model
   */
  interface contactsFieldRefs {
    readonly id: FieldRef<"contacts", 'Int'>
    readonly name: FieldRef<"contacts", 'String'>
    readonly email: FieldRef<"contacts", 'String'>
    readonly mobile: FieldRef<"contacts", 'String'>
    readonly business_type: FieldRef<"contacts", 'String'>
    readonly website_name: FieldRef<"contacts", 'String'>
    readonly created_at: FieldRef<"contacts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * contacts findUnique
   */
  export type contactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts findUniqueOrThrow
   */
  export type contactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts findFirst
   */
  export type contactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactsOrderByWithRelationInput | contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * contacts findFirstOrThrow
   */
  export type contactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactsOrderByWithRelationInput | contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * contacts findMany
   */
  export type contactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactsOrderByWithRelationInput | contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contacts.
     */
    cursor?: contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * contacts create
   */
  export type contactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The data needed to create a contacts.
     */
    data: XOR<contactsCreateInput, contactsUncheckedCreateInput>
  }

  /**
   * contacts createMany
   */
  export type contactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contacts.
     */
    data: contactsCreateManyInput | contactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contacts createManyAndReturn
   */
  export type contactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The data used to create many contacts.
     */
    data: contactsCreateManyInput | contactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contacts update
   */
  export type contactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The data needed to update a contacts.
     */
    data: XOR<contactsUpdateInput, contactsUncheckedUpdateInput>
    /**
     * Choose, which contacts to update.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts updateMany
   */
  export type contactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contacts.
     */
    data: XOR<contactsUpdateManyMutationInput, contactsUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactsWhereInput
    /**
     * Limit how many contacts to update.
     */
    limit?: number
  }

  /**
   * contacts updateManyAndReturn
   */
  export type contactsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The data used to update contacts.
     */
    data: XOR<contactsUpdateManyMutationInput, contactsUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactsWhereInput
    /**
     * Limit how many contacts to update.
     */
    limit?: number
  }

  /**
   * contacts upsert
   */
  export type contactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * The filter to search for the contacts to update in case it exists.
     */
    where: contactsWhereUniqueInput
    /**
     * In case the contacts found by the `where` argument doesn't exist, create a new contacts with this data.
     */
    create: XOR<contactsCreateInput, contactsUncheckedCreateInput>
    /**
     * In case the contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactsUpdateInput, contactsUncheckedUpdateInput>
  }

  /**
   * contacts delete
   */
  export type contactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
    /**
     * Filter which contacts to delete.
     */
    where: contactsWhereUniqueInput
  }

  /**
   * contacts deleteMany
   */
  export type contactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacts to delete
     */
    where?: contactsWhereInput
    /**
     * Limit how many contacts to delete.
     */
    limit?: number
  }

  /**
   * contacts without action
   */
  export type contactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacts
     */
    select?: contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacts
     */
    omit?: contactsOmit<ExtArgs> | null
  }


  /**
   * Model leads
   */

  export type AggregateLeads = {
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  export type LeadsAvgAggregateOutputType = {
    id: number | null
  }

  export type LeadsSumAggregateOutputType = {
    id: number | null
  }

  export type LeadsMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    website_url: string | null
    website_name: string | null
    created_at: Date | null
    company: string | null
  }

  export type LeadsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    website_url: string | null
    website_name: string | null
    created_at: Date | null
    company: string | null
  }

  export type LeadsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    website_url: number
    website_name: number
    created_at: number
    company: number
    _all: number
  }


  export type LeadsAvgAggregateInputType = {
    id?: true
  }

  export type LeadsSumAggregateInputType = {
    id?: true
  }

  export type LeadsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    website_url?: true
    website_name?: true
    created_at?: true
    company?: true
  }

  export type LeadsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    website_url?: true
    website_name?: true
    created_at?: true
    company?: true
  }

  export type LeadsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    website_url?: true
    website_name?: true
    created_at?: true
    company?: true
    _all?: true
  }

  export type LeadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to aggregate.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leads
    **/
    _count?: true | LeadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadsMaxAggregateInputType
  }

  export type GetLeadsAggregateType<T extends LeadsAggregateArgs> = {
        [P in keyof T & keyof AggregateLeads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeads[P]>
      : GetScalarType<T[P], AggregateLeads[P]>
  }




  export type leadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithAggregationInput | leadsOrderByWithAggregationInput[]
    by: LeadsScalarFieldEnum[] | LeadsScalarFieldEnum
    having?: leadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadsCountAggregateInputType | true
    _avg?: LeadsAvgAggregateInputType
    _sum?: LeadsSumAggregateInputType
    _min?: LeadsMinAggregateInputType
    _max?: LeadsMaxAggregateInputType
  }

  export type LeadsGroupByOutputType = {
    id: number
    name: string
    email: string
    website_url: string | null
    website_name: string
    created_at: Date | null
    company: string | null
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  type GetLeadsGroupByPayload<T extends leadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadsGroupByOutputType[P]>
            : GetScalarType<T[P], LeadsGroupByOutputType[P]>
        }
      >
    >


  export type leadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    website_url?: boolean
    website_name?: boolean
    created_at?: boolean
    company?: boolean
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    website_url?: boolean
    website_name?: boolean
    created_at?: boolean
    company?: boolean
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    website_url?: boolean
    website_name?: boolean
    created_at?: boolean
    company?: boolean
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    website_url?: boolean
    website_name?: boolean
    created_at?: boolean
    company?: boolean
  }

  export type leadsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "website_url" | "website_name" | "created_at" | "company", ExtArgs["result"]["leads"]>

  export type $leadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leads"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      website_url: string | null
      website_name: string
      created_at: Date | null
      company: string | null
    }, ExtArgs["result"]["leads"]>
    composites: {}
  }

  type leadsGetPayload<S extends boolean | null | undefined | leadsDefaultArgs> = $Result.GetResult<Prisma.$leadsPayload, S>

  type leadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadsCountAggregateInputType | true
    }

  export interface leadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leads'], meta: { name: 'leads' } }
    /**
     * Find zero or one Leads that matches the filter.
     * @param {leadsFindUniqueArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leadsFindUniqueArgs>(args: SelectSubset<T, leadsFindUniqueArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leadsFindUniqueOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leadsFindUniqueOrThrowArgs>(args: SelectSubset<T, leadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leadsFindFirstArgs>(args?: SelectSubset<T, leadsFindFirstArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leadsFindFirstOrThrowArgs>(args?: SelectSubset<T, leadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.leads.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.leads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadsWithIdOnly = await prisma.leads.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leadsFindManyArgs>(args?: SelectSubset<T, leadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leads.
     * @param {leadsCreateArgs} args - Arguments to create a Leads.
     * @example
     * // Create one Leads
     * const Leads = await prisma.leads.create({
     *   data: {
     *     // ... data to create a Leads
     *   }
     * })
     * 
     */
    create<T extends leadsCreateArgs>(args: SelectSubset<T, leadsCreateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {leadsCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leadsCreateManyArgs>(args?: SelectSubset<T, leadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {leadsCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leadsCreateManyAndReturnArgs>(args?: SelectSubset<T, leadsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leads.
     * @param {leadsDeleteArgs} args - Arguments to delete one Leads.
     * @example
     * // Delete one Leads
     * const Leads = await prisma.leads.delete({
     *   where: {
     *     // ... filter to delete one Leads
     *   }
     * })
     * 
     */
    delete<T extends leadsDeleteArgs>(args: SelectSubset<T, leadsDeleteArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leads.
     * @param {leadsUpdateArgs} args - Arguments to update one Leads.
     * @example
     * // Update one Leads
     * const leads = await prisma.leads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leadsUpdateArgs>(args: SelectSubset<T, leadsUpdateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {leadsDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.leads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leadsDeleteManyArgs>(args?: SelectSubset<T, leadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leadsUpdateManyArgs>(args: SelectSubset<T, leadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {leadsUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leadsUpdateManyAndReturnArgs>(args: SelectSubset<T, leadsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leads.
     * @param {leadsUpsertArgs} args - Arguments to update or create a Leads.
     * @example
     * // Update or create a Leads
     * const leads = await prisma.leads.upsert({
     *   create: {
     *     // ... data to create a Leads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leads we want to update
     *   }
     * })
     */
    upsert<T extends leadsUpsertArgs>(args: SelectSubset<T, leadsUpsertArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.leads.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends leadsCountArgs>(
      args?: Subset<T, leadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadsAggregateArgs>(args: Subset<T, LeadsAggregateArgs>): Prisma.PrismaPromise<GetLeadsAggregateType<T>>

    /**
     * Group by Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leadsGroupByArgs['orderBy'] }
        : { orderBy?: leadsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leads model
   */
  readonly fields: leadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leads model
   */
  interface leadsFieldRefs {
    readonly id: FieldRef<"leads", 'Int'>
    readonly name: FieldRef<"leads", 'String'>
    readonly email: FieldRef<"leads", 'String'>
    readonly website_url: FieldRef<"leads", 'String'>
    readonly website_name: FieldRef<"leads", 'String'>
    readonly created_at: FieldRef<"leads", 'DateTime'>
    readonly company: FieldRef<"leads", 'String'>
  }
    

  // Custom InputTypes
  /**
   * leads findUnique
   */
  export type leadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findUniqueOrThrow
   */
  export type leadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findFirst
   */
  export type leadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findFirstOrThrow
   */
  export type leadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findMany
   */
  export type leadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads create
   */
  export type leadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data needed to create a leads.
     */
    data: XOR<leadsCreateInput, leadsUncheckedCreateInput>
  }

  /**
   * leads createMany
   */
  export type leadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leads createManyAndReturn
   */
  export type leadsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leads update
   */
  export type leadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data needed to update a leads.
     */
    data: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
    /**
     * Choose, which leads to update.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads updateMany
   */
  export type leadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leads.
     */
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyInput>
    /**
     * Filter which leads to update
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to update.
     */
    limit?: number
  }

  /**
   * leads updateManyAndReturn
   */
  export type leadsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data used to update leads.
     */
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyInput>
    /**
     * Filter which leads to update
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to update.
     */
    limit?: number
  }

  /**
   * leads upsert
   */
  export type leadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The filter to search for the leads to update in case it exists.
     */
    where: leadsWhereUniqueInput
    /**
     * In case the leads found by the `where` argument doesn't exist, create a new leads with this data.
     */
    create: XOR<leadsCreateInput, leadsUncheckedCreateInput>
    /**
     * In case the leads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
  }

  /**
   * leads delete
   */
  export type leadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter which leads to delete.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads deleteMany
   */
  export type leadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to delete
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to delete.
     */
    limit?: number
  }

  /**
   * leads without action
   */
  export type leadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
  }


  /**
   * Model restaurant_contacts
   */

  export type AggregateRestaurant_contacts = {
    _count: Restaurant_contactsCountAggregateOutputType | null
    _avg: Restaurant_contactsAvgAggregateOutputType | null
    _sum: Restaurant_contactsSumAggregateOutputType | null
    _min: Restaurant_contactsMinAggregateOutputType | null
    _max: Restaurant_contactsMaxAggregateOutputType | null
  }

  export type Restaurant_contactsAvgAggregateOutputType = {
    id: number | null
  }

  export type Restaurant_contactsSumAggregateOutputType = {
    id: number | null
  }

  export type Restaurant_contactsMinAggregateOutputType = {
    id: number | null
    name: string | null
    restaurant_name: string | null
    phone: string | null
    email: string | null
    website_name: string | null
    created_at: Date | null
  }

  export type Restaurant_contactsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    restaurant_name: string | null
    phone: string | null
    email: string | null
    website_name: string | null
    created_at: Date | null
  }

  export type Restaurant_contactsCountAggregateOutputType = {
    id: number
    name: number
    restaurant_name: number
    phone: number
    email: number
    website_name: number
    created_at: number
    _all: number
  }


  export type Restaurant_contactsAvgAggregateInputType = {
    id?: true
  }

  export type Restaurant_contactsSumAggregateInputType = {
    id?: true
  }

  export type Restaurant_contactsMinAggregateInputType = {
    id?: true
    name?: true
    restaurant_name?: true
    phone?: true
    email?: true
    website_name?: true
    created_at?: true
  }

  export type Restaurant_contactsMaxAggregateInputType = {
    id?: true
    name?: true
    restaurant_name?: true
    phone?: true
    email?: true
    website_name?: true
    created_at?: true
  }

  export type Restaurant_contactsCountAggregateInputType = {
    id?: true
    name?: true
    restaurant_name?: true
    phone?: true
    email?: true
    website_name?: true
    created_at?: true
    _all?: true
  }

  export type Restaurant_contactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurant_contacts to aggregate.
     */
    where?: restaurant_contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurant_contacts to fetch.
     */
    orderBy?: restaurant_contactsOrderByWithRelationInput | restaurant_contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: restaurant_contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurant_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurant_contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned restaurant_contacts
    **/
    _count?: true | Restaurant_contactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Restaurant_contactsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Restaurant_contactsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Restaurant_contactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Restaurant_contactsMaxAggregateInputType
  }

  export type GetRestaurant_contactsAggregateType<T extends Restaurant_contactsAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant_contacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant_contacts[P]>
      : GetScalarType<T[P], AggregateRestaurant_contacts[P]>
  }




  export type restaurant_contactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: restaurant_contactsWhereInput
    orderBy?: restaurant_contactsOrderByWithAggregationInput | restaurant_contactsOrderByWithAggregationInput[]
    by: Restaurant_contactsScalarFieldEnum[] | Restaurant_contactsScalarFieldEnum
    having?: restaurant_contactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Restaurant_contactsCountAggregateInputType | true
    _avg?: Restaurant_contactsAvgAggregateInputType
    _sum?: Restaurant_contactsSumAggregateInputType
    _min?: Restaurant_contactsMinAggregateInputType
    _max?: Restaurant_contactsMaxAggregateInputType
  }

  export type Restaurant_contactsGroupByOutputType = {
    id: number
    name: string
    restaurant_name: string
    phone: string
    email: string
    website_name: string
    created_at: Date | null
    _count: Restaurant_contactsCountAggregateOutputType | null
    _avg: Restaurant_contactsAvgAggregateOutputType | null
    _sum: Restaurant_contactsSumAggregateOutputType | null
    _min: Restaurant_contactsMinAggregateOutputType | null
    _max: Restaurant_contactsMaxAggregateOutputType | null
  }

  type GetRestaurant_contactsGroupByPayload<T extends restaurant_contactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Restaurant_contactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Restaurant_contactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Restaurant_contactsGroupByOutputType[P]>
            : GetScalarType<T[P], Restaurant_contactsGroupByOutputType[P]>
        }
      >
    >


  export type restaurant_contactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    restaurant_name?: boolean
    phone?: boolean
    email?: boolean
    website_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["restaurant_contacts"]>

  export type restaurant_contactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    restaurant_name?: boolean
    phone?: boolean
    email?: boolean
    website_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["restaurant_contacts"]>

  export type restaurant_contactsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    restaurant_name?: boolean
    phone?: boolean
    email?: boolean
    website_name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["restaurant_contacts"]>

  export type restaurant_contactsSelectScalar = {
    id?: boolean
    name?: boolean
    restaurant_name?: boolean
    phone?: boolean
    email?: boolean
    website_name?: boolean
    created_at?: boolean
  }

  export type restaurant_contactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "restaurant_name" | "phone" | "email" | "website_name" | "created_at", ExtArgs["result"]["restaurant_contacts"]>

  export type $restaurant_contactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "restaurant_contacts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      restaurant_name: string
      phone: string
      email: string
      website_name: string
      created_at: Date | null
    }, ExtArgs["result"]["restaurant_contacts"]>
    composites: {}
  }

  type restaurant_contactsGetPayload<S extends boolean | null | undefined | restaurant_contactsDefaultArgs> = $Result.GetResult<Prisma.$restaurant_contactsPayload, S>

  type restaurant_contactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<restaurant_contactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Restaurant_contactsCountAggregateInputType | true
    }

  export interface restaurant_contactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['restaurant_contacts'], meta: { name: 'restaurant_contacts' } }
    /**
     * Find zero or one Restaurant_contacts that matches the filter.
     * @param {restaurant_contactsFindUniqueArgs} args - Arguments to find a Restaurant_contacts
     * @example
     * // Get one Restaurant_contacts
     * const restaurant_contacts = await prisma.restaurant_contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends restaurant_contactsFindUniqueArgs>(args: SelectSubset<T, restaurant_contactsFindUniqueArgs<ExtArgs>>): Prisma__restaurant_contactsClient<$Result.GetResult<Prisma.$restaurant_contactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant_contacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {restaurant_contactsFindUniqueOrThrowArgs} args - Arguments to find a Restaurant_contacts
     * @example
     * // Get one Restaurant_contacts
     * const restaurant_contacts = await prisma.restaurant_contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends restaurant_contactsFindUniqueOrThrowArgs>(args: SelectSubset<T, restaurant_contactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__restaurant_contactsClient<$Result.GetResult<Prisma.$restaurant_contactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant_contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurant_contactsFindFirstArgs} args - Arguments to find a Restaurant_contacts
     * @example
     * // Get one Restaurant_contacts
     * const restaurant_contacts = await prisma.restaurant_contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends restaurant_contactsFindFirstArgs>(args?: SelectSubset<T, restaurant_contactsFindFirstArgs<ExtArgs>>): Prisma__restaurant_contactsClient<$Result.GetResult<Prisma.$restaurant_contactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant_contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurant_contactsFindFirstOrThrowArgs} args - Arguments to find a Restaurant_contacts
     * @example
     * // Get one Restaurant_contacts
     * const restaurant_contacts = await prisma.restaurant_contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends restaurant_contactsFindFirstOrThrowArgs>(args?: SelectSubset<T, restaurant_contactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__restaurant_contactsClient<$Result.GetResult<Prisma.$restaurant_contactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurant_contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurant_contactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurant_contacts
     * const restaurant_contacts = await prisma.restaurant_contacts.findMany()
     * 
     * // Get first 10 Restaurant_contacts
     * const restaurant_contacts = await prisma.restaurant_contacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurant_contactsWithIdOnly = await prisma.restaurant_contacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends restaurant_contactsFindManyArgs>(args?: SelectSubset<T, restaurant_contactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurant_contactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant_contacts.
     * @param {restaurant_contactsCreateArgs} args - Arguments to create a Restaurant_contacts.
     * @example
     * // Create one Restaurant_contacts
     * const Restaurant_contacts = await prisma.restaurant_contacts.create({
     *   data: {
     *     // ... data to create a Restaurant_contacts
     *   }
     * })
     * 
     */
    create<T extends restaurant_contactsCreateArgs>(args: SelectSubset<T, restaurant_contactsCreateArgs<ExtArgs>>): Prisma__restaurant_contactsClient<$Result.GetResult<Prisma.$restaurant_contactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurant_contacts.
     * @param {restaurant_contactsCreateManyArgs} args - Arguments to create many Restaurant_contacts.
     * @example
     * // Create many Restaurant_contacts
     * const restaurant_contacts = await prisma.restaurant_contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends restaurant_contactsCreateManyArgs>(args?: SelectSubset<T, restaurant_contactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurant_contacts and returns the data saved in the database.
     * @param {restaurant_contactsCreateManyAndReturnArgs} args - Arguments to create many Restaurant_contacts.
     * @example
     * // Create many Restaurant_contacts
     * const restaurant_contacts = await prisma.restaurant_contacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurant_contacts and only return the `id`
     * const restaurant_contactsWithIdOnly = await prisma.restaurant_contacts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends restaurant_contactsCreateManyAndReturnArgs>(args?: SelectSubset<T, restaurant_contactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurant_contactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restaurant_contacts.
     * @param {restaurant_contactsDeleteArgs} args - Arguments to delete one Restaurant_contacts.
     * @example
     * // Delete one Restaurant_contacts
     * const Restaurant_contacts = await prisma.restaurant_contacts.delete({
     *   where: {
     *     // ... filter to delete one Restaurant_contacts
     *   }
     * })
     * 
     */
    delete<T extends restaurant_contactsDeleteArgs>(args: SelectSubset<T, restaurant_contactsDeleteArgs<ExtArgs>>): Prisma__restaurant_contactsClient<$Result.GetResult<Prisma.$restaurant_contactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant_contacts.
     * @param {restaurant_contactsUpdateArgs} args - Arguments to update one Restaurant_contacts.
     * @example
     * // Update one Restaurant_contacts
     * const restaurant_contacts = await prisma.restaurant_contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends restaurant_contactsUpdateArgs>(args: SelectSubset<T, restaurant_contactsUpdateArgs<ExtArgs>>): Prisma__restaurant_contactsClient<$Result.GetResult<Prisma.$restaurant_contactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurant_contacts.
     * @param {restaurant_contactsDeleteManyArgs} args - Arguments to filter Restaurant_contacts to delete.
     * @example
     * // Delete a few Restaurant_contacts
     * const { count } = await prisma.restaurant_contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends restaurant_contactsDeleteManyArgs>(args?: SelectSubset<T, restaurant_contactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurant_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurant_contactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurant_contacts
     * const restaurant_contacts = await prisma.restaurant_contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends restaurant_contactsUpdateManyArgs>(args: SelectSubset<T, restaurant_contactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurant_contacts and returns the data updated in the database.
     * @param {restaurant_contactsUpdateManyAndReturnArgs} args - Arguments to update many Restaurant_contacts.
     * @example
     * // Update many Restaurant_contacts
     * const restaurant_contacts = await prisma.restaurant_contacts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restaurant_contacts and only return the `id`
     * const restaurant_contactsWithIdOnly = await prisma.restaurant_contacts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends restaurant_contactsUpdateManyAndReturnArgs>(args: SelectSubset<T, restaurant_contactsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurant_contactsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restaurant_contacts.
     * @param {restaurant_contactsUpsertArgs} args - Arguments to update or create a Restaurant_contacts.
     * @example
     * // Update or create a Restaurant_contacts
     * const restaurant_contacts = await prisma.restaurant_contacts.upsert({
     *   create: {
     *     // ... data to create a Restaurant_contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant_contacts we want to update
     *   }
     * })
     */
    upsert<T extends restaurant_contactsUpsertArgs>(args: SelectSubset<T, restaurant_contactsUpsertArgs<ExtArgs>>): Prisma__restaurant_contactsClient<$Result.GetResult<Prisma.$restaurant_contactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurant_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurant_contactsCountArgs} args - Arguments to filter Restaurant_contacts to count.
     * @example
     * // Count the number of Restaurant_contacts
     * const count = await prisma.restaurant_contacts.count({
     *   where: {
     *     // ... the filter for the Restaurant_contacts we want to count
     *   }
     * })
    **/
    count<T extends restaurant_contactsCountArgs>(
      args?: Subset<T, restaurant_contactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Restaurant_contactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Restaurant_contactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Restaurant_contactsAggregateArgs>(args: Subset<T, Restaurant_contactsAggregateArgs>): Prisma.PrismaPromise<GetRestaurant_contactsAggregateType<T>>

    /**
     * Group by Restaurant_contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurant_contactsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends restaurant_contactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: restaurant_contactsGroupByArgs['orderBy'] }
        : { orderBy?: restaurant_contactsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, restaurant_contactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurant_contactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the restaurant_contacts model
   */
  readonly fields: restaurant_contactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for restaurant_contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__restaurant_contactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the restaurant_contacts model
   */
  interface restaurant_contactsFieldRefs {
    readonly id: FieldRef<"restaurant_contacts", 'Int'>
    readonly name: FieldRef<"restaurant_contacts", 'String'>
    readonly restaurant_name: FieldRef<"restaurant_contacts", 'String'>
    readonly phone: FieldRef<"restaurant_contacts", 'String'>
    readonly email: FieldRef<"restaurant_contacts", 'String'>
    readonly website_name: FieldRef<"restaurant_contacts", 'String'>
    readonly created_at: FieldRef<"restaurant_contacts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * restaurant_contacts findUnique
   */
  export type restaurant_contactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant_contacts
     */
    select?: restaurant_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant_contacts
     */
    omit?: restaurant_contactsOmit<ExtArgs> | null
    /**
     * Filter, which restaurant_contacts to fetch.
     */
    where: restaurant_contactsWhereUniqueInput
  }

  /**
   * restaurant_contacts findUniqueOrThrow
   */
  export type restaurant_contactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant_contacts
     */
    select?: restaurant_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant_contacts
     */
    omit?: restaurant_contactsOmit<ExtArgs> | null
    /**
     * Filter, which restaurant_contacts to fetch.
     */
    where: restaurant_contactsWhereUniqueInput
  }

  /**
   * restaurant_contacts findFirst
   */
  export type restaurant_contactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant_contacts
     */
    select?: restaurant_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant_contacts
     */
    omit?: restaurant_contactsOmit<ExtArgs> | null
    /**
     * Filter, which restaurant_contacts to fetch.
     */
    where?: restaurant_contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurant_contacts to fetch.
     */
    orderBy?: restaurant_contactsOrderByWithRelationInput | restaurant_contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurant_contacts.
     */
    cursor?: restaurant_contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurant_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurant_contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurant_contacts.
     */
    distinct?: Restaurant_contactsScalarFieldEnum | Restaurant_contactsScalarFieldEnum[]
  }

  /**
   * restaurant_contacts findFirstOrThrow
   */
  export type restaurant_contactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant_contacts
     */
    select?: restaurant_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant_contacts
     */
    omit?: restaurant_contactsOmit<ExtArgs> | null
    /**
     * Filter, which restaurant_contacts to fetch.
     */
    where?: restaurant_contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurant_contacts to fetch.
     */
    orderBy?: restaurant_contactsOrderByWithRelationInput | restaurant_contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurant_contacts.
     */
    cursor?: restaurant_contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurant_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurant_contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurant_contacts.
     */
    distinct?: Restaurant_contactsScalarFieldEnum | Restaurant_contactsScalarFieldEnum[]
  }

  /**
   * restaurant_contacts findMany
   */
  export type restaurant_contactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant_contacts
     */
    select?: restaurant_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant_contacts
     */
    omit?: restaurant_contactsOmit<ExtArgs> | null
    /**
     * Filter, which restaurant_contacts to fetch.
     */
    where?: restaurant_contactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurant_contacts to fetch.
     */
    orderBy?: restaurant_contactsOrderByWithRelationInput | restaurant_contactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing restaurant_contacts.
     */
    cursor?: restaurant_contactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurant_contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurant_contacts.
     */
    skip?: number
    distinct?: Restaurant_contactsScalarFieldEnum | Restaurant_contactsScalarFieldEnum[]
  }

  /**
   * restaurant_contacts create
   */
  export type restaurant_contactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant_contacts
     */
    select?: restaurant_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant_contacts
     */
    omit?: restaurant_contactsOmit<ExtArgs> | null
    /**
     * The data needed to create a restaurant_contacts.
     */
    data: XOR<restaurant_contactsCreateInput, restaurant_contactsUncheckedCreateInput>
  }

  /**
   * restaurant_contacts createMany
   */
  export type restaurant_contactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many restaurant_contacts.
     */
    data: restaurant_contactsCreateManyInput | restaurant_contactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * restaurant_contacts createManyAndReturn
   */
  export type restaurant_contactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant_contacts
     */
    select?: restaurant_contactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant_contacts
     */
    omit?: restaurant_contactsOmit<ExtArgs> | null
    /**
     * The data used to create many restaurant_contacts.
     */
    data: restaurant_contactsCreateManyInput | restaurant_contactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * restaurant_contacts update
   */
  export type restaurant_contactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant_contacts
     */
    select?: restaurant_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant_contacts
     */
    omit?: restaurant_contactsOmit<ExtArgs> | null
    /**
     * The data needed to update a restaurant_contacts.
     */
    data: XOR<restaurant_contactsUpdateInput, restaurant_contactsUncheckedUpdateInput>
    /**
     * Choose, which restaurant_contacts to update.
     */
    where: restaurant_contactsWhereUniqueInput
  }

  /**
   * restaurant_contacts updateMany
   */
  export type restaurant_contactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update restaurant_contacts.
     */
    data: XOR<restaurant_contactsUpdateManyMutationInput, restaurant_contactsUncheckedUpdateManyInput>
    /**
     * Filter which restaurant_contacts to update
     */
    where?: restaurant_contactsWhereInput
    /**
     * Limit how many restaurant_contacts to update.
     */
    limit?: number
  }

  /**
   * restaurant_contacts updateManyAndReturn
   */
  export type restaurant_contactsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant_contacts
     */
    select?: restaurant_contactsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant_contacts
     */
    omit?: restaurant_contactsOmit<ExtArgs> | null
    /**
     * The data used to update restaurant_contacts.
     */
    data: XOR<restaurant_contactsUpdateManyMutationInput, restaurant_contactsUncheckedUpdateManyInput>
    /**
     * Filter which restaurant_contacts to update
     */
    where?: restaurant_contactsWhereInput
    /**
     * Limit how many restaurant_contacts to update.
     */
    limit?: number
  }

  /**
   * restaurant_contacts upsert
   */
  export type restaurant_contactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant_contacts
     */
    select?: restaurant_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant_contacts
     */
    omit?: restaurant_contactsOmit<ExtArgs> | null
    /**
     * The filter to search for the restaurant_contacts to update in case it exists.
     */
    where: restaurant_contactsWhereUniqueInput
    /**
     * In case the restaurant_contacts found by the `where` argument doesn't exist, create a new restaurant_contacts with this data.
     */
    create: XOR<restaurant_contactsCreateInput, restaurant_contactsUncheckedCreateInput>
    /**
     * In case the restaurant_contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<restaurant_contactsUpdateInput, restaurant_contactsUncheckedUpdateInput>
  }

  /**
   * restaurant_contacts delete
   */
  export type restaurant_contactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant_contacts
     */
    select?: restaurant_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant_contacts
     */
    omit?: restaurant_contactsOmit<ExtArgs> | null
    /**
     * Filter which restaurant_contacts to delete.
     */
    where: restaurant_contactsWhereUniqueInput
  }

  /**
   * restaurant_contacts deleteMany
   */
  export type restaurant_contactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurant_contacts to delete
     */
    where?: restaurant_contactsWhereInput
    /**
     * Limit how many restaurant_contacts to delete.
     */
    limit?: number
  }

  /**
   * restaurant_contacts without action
   */
  export type restaurant_contactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant_contacts
     */
    select?: restaurant_contactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant_contacts
     */
    omit?: restaurant_contactsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContactsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    mobile: 'mobile',
    business_type: 'business_type',
    website_name: 'website_name',
    created_at: 'created_at'
  };

  export type ContactsScalarFieldEnum = (typeof ContactsScalarFieldEnum)[keyof typeof ContactsScalarFieldEnum]


  export const LeadsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    website_url: 'website_url',
    website_name: 'website_name',
    created_at: 'created_at',
    company: 'company'
  };

  export type LeadsScalarFieldEnum = (typeof LeadsScalarFieldEnum)[keyof typeof LeadsScalarFieldEnum]


  export const Restaurant_contactsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    restaurant_name: 'restaurant_name',
    phone: 'phone',
    email: 'email',
    website_name: 'website_name',
    created_at: 'created_at'
  };

  export type Restaurant_contactsScalarFieldEnum = (typeof Restaurant_contactsScalarFieldEnum)[keyof typeof Restaurant_contactsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type contactsWhereInput = {
    AND?: contactsWhereInput | contactsWhereInput[]
    OR?: contactsWhereInput[]
    NOT?: contactsWhereInput | contactsWhereInput[]
    id?: IntFilter<"contacts"> | number
    name?: StringFilter<"contacts"> | string
    email?: StringFilter<"contacts"> | string
    mobile?: StringFilter<"contacts"> | string
    business_type?: StringFilter<"contacts"> | string
    website_name?: StringFilter<"contacts"> | string
    created_at?: DateTimeNullableFilter<"contacts"> | Date | string | null
  }

  export type contactsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    business_type?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type contactsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contactsWhereInput | contactsWhereInput[]
    OR?: contactsWhereInput[]
    NOT?: contactsWhereInput | contactsWhereInput[]
    name?: StringFilter<"contacts"> | string
    email?: StringFilter<"contacts"> | string
    mobile?: StringFilter<"contacts"> | string
    business_type?: StringFilter<"contacts"> | string
    website_name?: StringFilter<"contacts"> | string
    created_at?: DateTimeNullableFilter<"contacts"> | Date | string | null
  }, "id">

  export type contactsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    business_type?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: contactsCountOrderByAggregateInput
    _avg?: contactsAvgOrderByAggregateInput
    _max?: contactsMaxOrderByAggregateInput
    _min?: contactsMinOrderByAggregateInput
    _sum?: contactsSumOrderByAggregateInput
  }

  export type contactsScalarWhereWithAggregatesInput = {
    AND?: contactsScalarWhereWithAggregatesInput | contactsScalarWhereWithAggregatesInput[]
    OR?: contactsScalarWhereWithAggregatesInput[]
    NOT?: contactsScalarWhereWithAggregatesInput | contactsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contacts"> | number
    name?: StringWithAggregatesFilter<"contacts"> | string
    email?: StringWithAggregatesFilter<"contacts"> | string
    mobile?: StringWithAggregatesFilter<"contacts"> | string
    business_type?: StringWithAggregatesFilter<"contacts"> | string
    website_name?: StringWithAggregatesFilter<"contacts"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"contacts"> | Date | string | null
  }

  export type leadsWhereInput = {
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    id?: IntFilter<"leads"> | number
    name?: StringFilter<"leads"> | string
    email?: StringFilter<"leads"> | string
    website_url?: StringNullableFilter<"leads"> | string | null
    website_name?: StringFilter<"leads"> | string
    created_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    company?: StringNullableFilter<"leads"> | string | null
  }

  export type leadsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    website_url?: SortOrderInput | SortOrder
    website_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
  }

  export type leadsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    name?: StringFilter<"leads"> | string
    email?: StringFilter<"leads"> | string
    website_url?: StringNullableFilter<"leads"> | string | null
    website_name?: StringFilter<"leads"> | string
    created_at?: DateTimeNullableFilter<"leads"> | Date | string | null
    company?: StringNullableFilter<"leads"> | string | null
  }, "id">

  export type leadsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    website_url?: SortOrderInput | SortOrder
    website_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    _count?: leadsCountOrderByAggregateInput
    _avg?: leadsAvgOrderByAggregateInput
    _max?: leadsMaxOrderByAggregateInput
    _min?: leadsMinOrderByAggregateInput
    _sum?: leadsSumOrderByAggregateInput
  }

  export type leadsScalarWhereWithAggregatesInput = {
    AND?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    OR?: leadsScalarWhereWithAggregatesInput[]
    NOT?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"leads"> | number
    name?: StringWithAggregatesFilter<"leads"> | string
    email?: StringWithAggregatesFilter<"leads"> | string
    website_url?: StringNullableWithAggregatesFilter<"leads"> | string | null
    website_name?: StringWithAggregatesFilter<"leads"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"leads"> | Date | string | null
    company?: StringNullableWithAggregatesFilter<"leads"> | string | null
  }

  export type restaurant_contactsWhereInput = {
    AND?: restaurant_contactsWhereInput | restaurant_contactsWhereInput[]
    OR?: restaurant_contactsWhereInput[]
    NOT?: restaurant_contactsWhereInput | restaurant_contactsWhereInput[]
    id?: IntFilter<"restaurant_contacts"> | number
    name?: StringFilter<"restaurant_contacts"> | string
    restaurant_name?: StringFilter<"restaurant_contacts"> | string
    phone?: StringFilter<"restaurant_contacts"> | string
    email?: StringFilter<"restaurant_contacts"> | string
    website_name?: StringFilter<"restaurant_contacts"> | string
    created_at?: DateTimeNullableFilter<"restaurant_contacts"> | Date | string | null
  }

  export type restaurant_contactsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    restaurant_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type restaurant_contactsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: restaurant_contactsWhereInput | restaurant_contactsWhereInput[]
    OR?: restaurant_contactsWhereInput[]
    NOT?: restaurant_contactsWhereInput | restaurant_contactsWhereInput[]
    name?: StringFilter<"restaurant_contacts"> | string
    restaurant_name?: StringFilter<"restaurant_contacts"> | string
    phone?: StringFilter<"restaurant_contacts"> | string
    email?: StringFilter<"restaurant_contacts"> | string
    website_name?: StringFilter<"restaurant_contacts"> | string
    created_at?: DateTimeNullableFilter<"restaurant_contacts"> | Date | string | null
  }, "id">

  export type restaurant_contactsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    restaurant_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: restaurant_contactsCountOrderByAggregateInput
    _avg?: restaurant_contactsAvgOrderByAggregateInput
    _max?: restaurant_contactsMaxOrderByAggregateInput
    _min?: restaurant_contactsMinOrderByAggregateInput
    _sum?: restaurant_contactsSumOrderByAggregateInput
  }

  export type restaurant_contactsScalarWhereWithAggregatesInput = {
    AND?: restaurant_contactsScalarWhereWithAggregatesInput | restaurant_contactsScalarWhereWithAggregatesInput[]
    OR?: restaurant_contactsScalarWhereWithAggregatesInput[]
    NOT?: restaurant_contactsScalarWhereWithAggregatesInput | restaurant_contactsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"restaurant_contacts"> | number
    name?: StringWithAggregatesFilter<"restaurant_contacts"> | string
    restaurant_name?: StringWithAggregatesFilter<"restaurant_contacts"> | string
    phone?: StringWithAggregatesFilter<"restaurant_contacts"> | string
    email?: StringWithAggregatesFilter<"restaurant_contacts"> | string
    website_name?: StringWithAggregatesFilter<"restaurant_contacts"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"restaurant_contacts"> | Date | string | null
  }

  export type contactsCreateInput = {
    name: string
    email: string
    mobile: string
    business_type: string
    website_name: string
    created_at?: Date | string | null
  }

  export type contactsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    mobile: string
    business_type: string
    website_name: string
    created_at?: Date | string | null
  }

  export type contactsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    website_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contactsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    website_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contactsCreateManyInput = {
    id?: number
    name: string
    email: string
    mobile: string
    business_type: string
    website_name: string
    created_at?: Date | string | null
  }

  export type contactsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    website_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contactsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    website_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type leadsCreateInput = {
    name: string
    email: string
    website_url?: string | null
    website_name?: string
    created_at?: Date | string | null
    company?: string | null
  }

  export type leadsUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    website_url?: string | null
    website_name?: string
    created_at?: Date | string | null
    company?: string | null
  }

  export type leadsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    website_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type leadsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    website_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type leadsCreateManyInput = {
    id?: number
    name: string
    email: string
    website_url?: string | null
    website_name?: string
    created_at?: Date | string | null
    company?: string | null
  }

  export type leadsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    website_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type leadsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    website_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type restaurant_contactsCreateInput = {
    name: string
    restaurant_name: string
    phone: string
    email: string
    website_name: string
    created_at?: Date | string | null
  }

  export type restaurant_contactsUncheckedCreateInput = {
    id?: number
    name: string
    restaurant_name: string
    phone: string
    email: string
    website_name: string
    created_at?: Date | string | null
  }

  export type restaurant_contactsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    restaurant_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type restaurant_contactsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    restaurant_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type restaurant_contactsCreateManyInput = {
    id?: number
    name: string
    restaurant_name: string
    phone: string
    email: string
    website_name: string
    created_at?: Date | string | null
  }

  export type restaurant_contactsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    restaurant_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type restaurant_contactsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    restaurant_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website_name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type contactsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    business_type?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrder
  }

  export type contactsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contactsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    business_type?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrder
  }

  export type contactsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    business_type?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrder
  }

  export type contactsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type leadsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    website_url?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrder
    company?: SortOrder
  }

  export type leadsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type leadsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    website_url?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrder
    company?: SortOrder
  }

  export type leadsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    website_url?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrder
    company?: SortOrder
  }

  export type leadsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type restaurant_contactsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    restaurant_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrder
  }

  export type restaurant_contactsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type restaurant_contactsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    restaurant_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrder
  }

  export type restaurant_contactsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    restaurant_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website_name?: SortOrder
    created_at?: SortOrder
  }

  export type restaurant_contactsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}